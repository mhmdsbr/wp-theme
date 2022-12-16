<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-31' ] );
  ?>
  <section class="c-web-development u-flex u-flex--column">
    <section>
      <h1 class="main-header"><?php the_title(); ?></h1>
      <div class="banner-image banner-image-first"><?php the_post_thumbnail(); ?></div>
      <div class="main-text">
        <?php the_content(); ?>
      </div>
    </section>

    <?php
    get_template_part( 'templates/partials/info-box' );

    $slider_items = get_field( 'slider_items' );
    if ( $slider_items )
    {
      ?>
      <section id="slider">
        <div class="main-header"><?php echo get_field( 'slider_title' ); ?></div>
        <div class="extended-sub-header"><?php echo get_field( 'slider_description' ); ?></div>
        <div class="u-flex u-flex--row u-flex--center c-web-development__slider-wrapper">
          <?php
          foreach ( $slider_items as $item )
          {
            ?>
            <div class="u-flex u-flex--column c-web-development__slider_items">
              <div class="u-flex u-flex--row c-web-development__desc-container">
                <div class="col-3 c-web-development__desc">
                  <h4><?php echo $item[ 'title' ]; ?></h4>
                  <?php
                  if ( $item[ 'image' ] )
                  {
                    ?>
                    <div class="c-web-development__img">
                      <img src="<?php echo esc_url( $item[ 'image' ][ 'url' ] ); ?>" alt="<?php echo esc_attr( $item[ 'image' ][ 'alt' ] ); ?>"/>
                    </div>
                    <?php
                  }
                  ?>
                </div>
                <p class="col-9 main-content"><?php echo nl2br( $item[ 'description' ] ); ?></p>
              </div>
            </div>
            <?php
          }
          ?>
        </div>
      </section>
      <?php
    }

    ob_start();
    get_template_part( 'templates/partials/service-columns', '', [ 'class' => 'col-5 col-sm-4' ] );
    $columns = ob_get_clean();
    if ( $columns )
    {
      ?>
      <section class="c-page-sections--js c-our-services">
        <div class="u-flex u-flex--column o-title">
          <h1 class="e-default-title"><?php echo get_field( 'service_title', 'option' ); ?></h1>
          <p><?php echo get_field( 'service_description', 'option' ); ?></p>
        </div>
        <?php echo $columns; ?>
      </section>
      <?php
    }

    get_template_part( 'templates/partials/service-testimonials' );
    ?>

    <section id="booking">
      <div class="box-booking u-flex u-flex--column">
        <h4>Help Us to Set Most Useful Meeting</h4>
        <label for="full-name">Your Name*</label> <input type="text" id="full-name" name="fullname" required>
        <label for="copmany">Company Name*</label> <input type="text" id="copmany" name="company">
        <label for="email">Email*</label> <input type="email" id="email" name="email">
        <label for="desc">Description</label> <textarea id="desc" name="description"></textarea>
        <div class="u-flex u-flex--center c-button-module-2" id="close-booking">
          <button>
            <em class="button-circle"></em> <span aria-label="hidden">Book Meeting</span>
          </button>
        </div>
      </div>
    </section>

    <?php
    $faq_items = get_field( 'faq_items' );
    if ( $faq_items )
    {
      ?>
      <section id="boxes">
        <?php
        foreach ( $faq_items as $faq_item )
        {
          ?>
          <div class="box d-flex flex-row justify-content-between">
            <p><?php echo $faq_item[ 'title' ]; ?></p>
            <div class="plus-container d-flex u-flex--center">
              <div class="img"></div>
            </div>
          </div>
          <?php
        }
        ?>
      </section>
      <?php
    }
    ?>
  </section>
  <?php
  get_template_part( 'templates/partials/get-back' );
  get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
  get_template_part( 'templates/partials/footer-socials' );
  ?>
</div>
<?php
wp_enqueue_script( 'vendor-js', BUGLOOS_THEME_URI . '/assets/scripts/web-development-single-page-vendor.min', [
  'jquery'
], BUGLOOS_THEME_VERSION, true );

wp_enqueue_script( 'main-js', BUGLOOS_THEME_URI . '/src/scripts/main.js', [
  'jquery',
  'vendor-js'
], BUGLOOS_THEME_VERSION, true );
