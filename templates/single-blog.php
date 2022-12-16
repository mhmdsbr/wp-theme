<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-7' ] );
  ?>
  <section class="c-blog-page u-flex u-flex--column u-flex--center">
    <?php
    if ( has_post_thumbnail() )
    {
      ?>
      <div class="c-blog__featured-img">
        <?php the_post_thumbnail(); ?>
      </div>
      <?php
    }
    ?>
    <div class="c-blog__content">
      <h1><?php the_title(); ?></h1>
      <?php the_content(); ?>
    </div>
    <?php
    $posts = get_posts( [
      'post_type'      => 'post',
      'posts_per_page' => 3,
      'post_status'    => 'publish'
    ] );

    if ( $posts )
    {
      ?>
      <div class="c-blog-page__more-post-title u-flex u-flex--row">
        <h3><?php _e( 'Explore Bugloos More', 'bugloos' ); ?></h3>
        <div class="u-flex u-flex--center c-button-module-2">
          <button>
            <em class="button-circle"></em> <span aria-label="hidden"><?php _e( 'Read Similar', 'bugloos' ); ?></span>
          </button>
        </div>
      </div>
      <div class="c-blog-page__more-posts no-gutters u-flex--center u-flex u-flex--row">
        <?php
        foreach ( $posts as $post )
        {
          setup_postdata( $post );
          ?>
          <article class="">
            <div class="img__wrapper">
              <?php the_post_thumbnail( 'bugloos_blog_small' ); ?>
            </div>
            <div class="content__wrapper">
              <h5><?php echo get_the_title(); ?></h5>
              <p><?php echo bugloos_get_content(); ?></p>
              <a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php _e( 'Read More', 'bugloos' ); ?></a>
            </div>
          </article>
          <?php
        }
        ?>
      </div>
      <?php
    }

    wp_reset_postdata();
    ?>
  </section>
  <?php
  get_template_part( 'templates/partials/get-back' );
  get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
  get_template_part( 'templates/partials/footer-socials' );
  ?>
</div>
