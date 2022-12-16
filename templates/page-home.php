<?php get_header(); ?>
<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0 home-page">
  <?php get_template_part( 'templates/partials/header-menu' ); ?>
  <div class="hideMe">
    <div id="masterWrap">
      <?php get_template_part( 'templates/partials/lottie-wave' ); ?>
      <div id="panelWrap" class="container-fluid no-gutters">
        <?php
        get_template_part( 'templates/home/hero' );
        get_template_part( 'templates/home/services' );
        get_template_part( 'templates/home/footprint' );
        get_template_part( 'templates/home/testimonials' );
        get_template_part( 'templates/home/blog' );
        ?>
        <section class="c-page-sections--js c-crew-module">
          <div id="particles-js-4"></div>
          <?php
          get_template_part( 'templates/home/team' );
          get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play6' ] );
          ?>
        </section>
        <section class="c-page-sections--js c-project-form">
          <div id="particles-js-5"></div>
          <?php
          get_template_part( 'templates/home/contact' );
          get_template_part( 'templates/partials/footer-socials' );
          get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play7' ] );
          ?>
        </section>
      </div>
    </div>
    <div class="dots"></div>
  </div>
</div>
<?php get_footer(); ?>
