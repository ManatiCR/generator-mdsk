<?php
/**
 * @file
 * Custom context.
 *
 * @see https://gist.github.com/pbuyle/7698675
 */

use Drupal\DrupalExtension\Context\RawDrupalContext;
use Behat\Mink\Exception;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends RawDrupalContext {

  /**
   * Reload Solr Core.
   *
   * @Then I should reload Solr
   */
  public function reloadSolr() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http://127.0.0.1:8983/solr/admin/cores?action=RELOAD&core=collection1');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
  }

  /**
   * Scan XML for content.
   *
   * @Then I should see :content from expression :expression in XML
   */
  public function xmlContainsContent($content, $expression) {
    $doc = new DOMDocument();
    $doc->loadXML($this->getSession()->getDriver()->getContent());
    $xpath = new DOMXpath($doc);
    $elements = $xpath->query($expression);
    if (!is_null($elements)) {
      foreach ($elements as $element) {
        if (strpos($element->nodeValue, $content) !== FALSE) {
          return TRUE;
        }
      }
    }
    throw new \Behat\Mink\Exception\ElementNotFoundException($this->getSession(), $content, 'xpath', $expression);
  }

  /**
   * Scan XML for content that should not be there.
   *
   * @Then I should not see :content from expression :expression in XML
   */
  public function xmlDoesNotContainContent($content, $expression) {
    $doc = new DOMDocument();
    $doc->loadXML($this->getSession()->getDriver()->getContent());
    $xpath = new DOMXpath($doc);
    $elements = $xpath->query($expression);
    if (!is_null($elements)) {
      foreach ($elements as $element) {
        if (strpos($element->nodeValue, $content) !== FALSE) {
          throw new \Exception('Found "' . $content . '"');
        }
      }
    }
    return TRUE;
  }

  /**
   * Checks that form element with specified label and type exists on the page.
   *
   * @codingStandardsIgnoreStart
   *
   * @Then /^(?:|I )should see an? "(?P<label>[^"]*)" (?P<type>[^"]*) form element$/
   *
   * @codingStandardsIgnoreEnd
   */
  public function assertTypedFormElementOnPage($label, $type) {
    $container = $this->getSession()->getPage();

    $pattern = '/(^| )form-type-' . preg_quote($type) . '($| )/';
    $label_nodes = $container->findAll('css', '.form-item label');
    foreach ($label_nodes as $label_node) {
      if ($label_node->getText() === $label
        && preg_match($pattern, $label_node->getParent()->getAttribute('class'))) {
        return;
      }
    }
    throw new \Behat\Mink\Exception\ElementNotFoundException($this->getSession(), $type . ' form item', 'label', $label);
  }

  /**
   * Ensure the response is decodable JSON.
   *
   * @Then /^the response is JSON$/
   */
  public function theResponseIsJson() {
    $data = json_decode($this->getSession()->getDriver()->getContent());
    if (empty($data)) {
      throw new \Exception('Response was not JSON');
    }
  }

  /**
   * Simple scan of the raw response for a particular string.
   *
   * @Then /^the response contains "([^"]*)"$/
   */
  public function theResponseContains($text) {
    if (strpos($this->getSession()->getDriver()->getContent(), $text) === FALSE) {
      throw new \Exception(sprintf('Response does not contain "%s"', $text));
    }
  }

  /**
   * Select first autocomplete option for given search string.
   *
   * @see https://www.drupal.org/files/issues/panopoly_test-contentitem-autocomplete-2374827-6.patch
   *
   * @codingStandardsIgnoreStart
   *
   * @When /^I select the first autocomplete option for "([^"]*)" on the "([^"]*)" field$/
   *
   * @codingStandardsIgnoreEnd
   */
  public function iSelectFirstAutocomplete($prefix, $identifier) {
    $session = $this->getSession();
    $page = $session->getPage();
    $element = $page->findField($identifier);

    // Use this as wait time when needed.
    $wait_time = 100;

    if (empty($element)) {
      throw new \Exception(sprintf('We couldn\'t find "%s" on the page', $identifier));
    }
    $page->fillField($identifier, $prefix);

    $xpath = $element->getXpath();
    $driver = $session->getDriver();

    // Press the backspace key.
    $driver->keyDown($xpath, 8);
    $driver->keyUp($xpath, 8);

    // Retype the last character.
    $chars = str_split($prefix);
    $last_char = array_pop($chars);
    $driver->keyDown($xpath, $last_char);
    $driver->keyUp($xpath, $last_char);

    // Wait for AJAX to finish.
    $this->iWaitForAjax($wait_time);

    // And make sure the autocomplete is showing.
    $this->getSession()
      ->wait($wait_time, 'jQuery("#autocomplete").show().length > 0');

    // And wait for 1 second just to be sure.
    sleep(1);

    // Press the down arrow to select the first option.
    $driver->keyDown($xpath, 40);
    $driver->keyUp($xpath, 40);

    // Enter confirms selection and copies the value into the field.
    $driver->keyDown($xpath, 13);
    $driver->keyUp($xpath, 13);

    // Wait for AJAX to finish.
    $this->iWaitForAjax($wait_time);
  }

  /**
   * Wait $miliseconds miliseconds for getting ajax ready.
   */
  public function iWaitForAjax($miliseconds) {
    $this->getSession()->wait($miliseconds, '(typeof(jQuery)=="undefined" || (0 === jQuery.active && 0 === jQuery(\':animated\').length))');
  }

  /**
   * Fills in WYSIWYG editor with specified id.
   *
   * @codingStandardsIgnoreStart
   *
   * @When /^(?:|I )fill in "(?P<text>[^"]*)" in WYSIWYG editor "(?P<iframe>[^"]*)"$/
   *
   * @codingStandardsIgnoreEnd
   */
  public function iFillInInWysiwygEditor($text, $iframe) {
    // First set name to iframe because ckeditor doesn't have one.
    $this->getSession()->executeScript("jQuery('#" . $iframe . "').next().find('iframe').attr('name', '" . $iframe . "')");

    try {
      $this->getSession()->switchToIFrame($iframe);
    }
    catch (Exception $e) {
      throw new \Exception(sprintf("No iframe with id '%s' found on the page '%s'.", $iframe, $this->getSession()->getCurrentUrl()));
    }
    $this->getSession()->executeScript("document.body.innerHTML = '<p>" . $text . "</p>'");
    $this->getSession()->switchToIFrame();
  }

  /**
   * Verify that a given option doesn't exist in a given select element.
   *
   * @Then option :option should not exist in :select
   */
  public function optionShouldNotExist($option, $select) {
    $element = $this->getSession()->getPage();
    $selector = '#' . $select . ' > option[value="' . $option . '"]';
    $results = $element->findAll('css', $selector);
    if (count($results)) {
      throw New \Exception('Option ' . $option . ' was found in select ' . $select);
    }
  }

  /**
   * Verify that a given option does exist in a given select element.
   *
   * @Then option :option should exist in :select
   */
  public function optionShouldExist($option, $select) {
    $element = $this->getSession()->getPage();
    $selector = '#' . $select . ' > option[value="' . $option . '"]';
    $results = $element->findAll('css', $selector);
    if (count($results) === 0) {
      throw New \Exception('Option ' . $option . ' was not found in select ' . $select);
    }
  }

  /**
   * Create a node of given type and visit its path.
   *
   * @When I am viewing a published :type content with the title :title
   */
  public function createPublishedNode($type, $title) {
    $node = (object) array(
      'title' => $title,
      'type' => $type,
      'body' => $this->getRandom()->string(255),
      'status' => 1,
    );
    $saved = $this->nodeCreate($node);
    // Set internal page on the new node.
    $this->getSession()->visit($this->locatePath('/node/' . $saved->nid));
  }

}
