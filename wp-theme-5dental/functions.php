<?php

// Enqueue theme assets
add_action('wp_enqueue_scripts', function () {
  $uri = get_template_directory_uri();

  wp_enqueue_style('5dental-base', $uri . '/assets/css/base.css', [], null);
  wp_enqueue_style('5dental-header', $uri . '/assets/css/header.css', [], null);
  wp_enqueue_style('5dental-overlays', $uri . '/assets/css/overlays.css', [], null);
  wp_enqueue_style('5dental-hero', $uri . '/assets/css/hero.css', [], null);
  wp_enqueue_style('5dental-sections', $uri . '/assets/css/sections.css', [], null);
  wp_enqueue_style('5dental-footer', $uri . '/assets/css/footer.css', [], null);
  wp_enqueue_style('5dental-lower', $uri . '/assets/css/lower.css', [], null);
  wp_enqueue_style('5dental-responsive', $uri . '/assets/css/responsive.css', [], null);

  wp_enqueue_script('5dental-site', $uri . '/assets/js/site.js', [], null, true);
});

// Register pattern categories
add_action('init', function () {
  register_block_pattern_category('5dental', ['label' => '5DENTAL']);
});
