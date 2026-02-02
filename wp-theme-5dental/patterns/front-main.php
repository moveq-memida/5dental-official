<?php
/**
 * Title: Front Page Main
 * Slug: 5dental/front-main
 * Categories: 5dental
 */
?>
<!-- wp:html -->
<?php
$main = file_get_contents(__DIR__ . '/../_front-main.html');
$main = str_replace('assets/', esc_url(get_template_directory_uri()) . '/assets/', $main);
echo $main;
?>
<!-- /wp:html -->
