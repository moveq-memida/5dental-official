<?php
/**
 * Title: Breadcrumb
 * Slug: 5dental/breadcrumb
 * Categories: 5dental
 */
?>
<!-- wp:html -->
<nav class="breadcrumb" aria-label="パンくずリスト">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a class="breadcrumb__link" href="/">HOME</a>
      <span class="breadcrumb__separator" aria-hidden="true">
        <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/icons/breadcrumb-separator.svg" alt="" />
      </span>
    </li>
    <li class="breadcrumb__item">
      <span class="breadcrumb__current">ページ名</span>
    </li>
  </ol>
</nav>
<!-- /wp:html -->
