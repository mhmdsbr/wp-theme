<?php
/**
 * The template for discovery project page
 * @package Bugloos
 *
 * Template Name: Discovery Project
 */
get_header();
?>
<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-6' ] );
  ?>
  <section class="c-project-discovery u-flex u-flex--column u-flex--center">
    <div class="u-flex u-flex--column o-title">
      <h3><?php the_title(); ?></h3>
      <?php the_content(); ?>
    </div>
    <?php
    $slider = get_field( 'discovery_project_slider' );
    if ( $slider )
    {
      ?>
      <div class="u-flex u-flex--row u-flex--center c-projects__slider-wrapper">
        <?php
        foreach ( $slider as $item )
        {
          ?>
          <div class="u-flex u-flex--column c-projects__slider_items">
            <div class="u-flex u-flex--row c-projects__desc-container">
              <div class="col-3 c-projects__desc">
                <h4><?php echo $item[ 'title' ]; ?></h4>
                <?php
                if ( $item[ 'image' ] )
                {
                  ?>
                  <div class="c-projects__img">
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
