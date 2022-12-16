<?php
/**
 * The template for blog page
 * @package Bugloos
 *
 * Template Name: Blog
 */
get_header();
?>
<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-8' ] );
  ?>
  <section class="c-archive-blog u-flex u-flex--column u-flex--center">
    <?php
    $latest_posts = get_posts( [
      'post_type'      => 'post',
      'posts_per_page' => 4,
      'post_status'    => 'publish'
    ] );

    if ( $latest_posts )
    {
      $left      = '';
      $right     = '';
      $iteration = 1;

      foreach ( $latest_posts as $post )
      {
        setup_postdata( $post );

        ob_start();

        if ( $iteration == 1 )
        {
          ?>
          <div class="blog-archive-items--lg">
            <div class="img-wrapper">
              <?php the_post_thumbnail( 'bugloos_blog_large' ); ?>
            </div>
            <h5><?php echo get_the_title(); ?></h5>
            <p><?php echo bugloos_get_content( 25 ); ?></p>
            <a class="blog-archive-link" href="<?php echo esc_url( get_the_permalink() ); ?>"><?php _e( 'Read More', 'bugloos' ); ?></a>
          </div>
          <?php
          $left = ob_get_clean();
        }
        else
        {
          ?>
          <div class="blog-archive__items">
            <div class="img-wrapper">
              <?php the_post_thumbnail( 'bugloos_blog_thumbnail' ); ?>
            </div>
            <h5><?php echo get_the_title(); ?></h5>
            <a class="blog-archive-link" href="<?php echo esc_url( get_the_permalink() ); ?>"><?php _e( 'Read More', 'bugloos' ); ?></a>
          </div>
          <?php
          $right .= ob_get_clean();
        }

        $iteration ++;
      }
      ?>
      <div class="row archive-blog__grid u-flex u-flex--row g-0">
        <div class="col-md-8 archive-blog__grid-item g-0">
          <?php echo $left; ?>
        </div>
        <div class="col-md-4 archive-blog__grid-item g-0">
          <?php echo $right; ?>
        </div>
      </div>
      <?php
    }

    wp_reset_postdata();

    $categories = get_categories( [ 'hide_empty' => true ] );
    foreach ( $categories as $category )
    {
      $posts = get_posts( [
        'post_type'      => 'post',
        'posts_per_page' => 3,
        'post_status'    => 'publish',
        'category'       => $category->term_id
      ] );
      ?>
      <div class="c-archive-page__more-post-title u-flex u-flex--row">
        <h3><?php echo $category->name; ?></h3>
        <div class="u-flex u-flex--center c-button-module-2">
          <a href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>"> <em class="button-circle"></em>
            <span aria-label="hidden"><?php _e( 'Read Similar', 'bugloos' ); ?></span> </a>
        </div>
      </div>
      <div class="c-archive-page__more-posts u-flex--center u-flex u-flex--row">
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
        wp_reset_postdata();
        ?>
      </div>
      <?php
    }
    get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
    ?>
  </section>
  <?php
  get_template_part( 'templates/partials/get-back' );
  get_template_part( 'templates/partials/footer-socials' );
  ?>
</div>
<?php get_footer(); ?>
