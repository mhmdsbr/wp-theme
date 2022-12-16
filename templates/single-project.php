<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-27' ] );
  ?>
  <section class="c-single" id="c-single">
    <div class="u-flex u-flex--row u-flex--center c-single__slider-wrapper" id="c-single__slider-wrapper">
      <?php
      $projects = get_posts( [
        'post_type'      => 'project',
        'posts_per_page' => - 1,
        'post_status'    => 'publish'
      ] );

      foreach ( $projects as $post )
      {
        setup_postdata( $post );

        $categories = get_the_terms( $post->ID, 'project_category' );

        $images = [];

        $full_image = get_field( 'full_image' );
        if ( $full_image )
          $images[] = $full_image;

        if ( ! $images )
        {
          $image_3 = get_field( 'image_three' );
          if ( $image_3 )
            $images[] = $image_3;

          $image_2 = get_field( 'image_two' );
          if ( $image_2 )
            $images[] = $image_2;

          $image_1 = get_field( 'image_one' );
          if ( $image_1 )
            $images[] = $image_1;
        }
        ?>
        <div class="u-flex u-flex--row c-single__slider_items">
          <div class="col-12 col-lg-7 position-relative">
            <div class="image-container">
              <?php
              foreach ( $images as $image )
              {
                ?>
                <img src="<?php echo esc_url( $image[ 'url' ] ); ?>" alt="<?php echo esc_attr( $image[ 'alt' ] ); ?>">
                <?php
              }
              ?>
            </div>
            <?php get_template_part( 'templates/partials/project-testimonials' ); ?>
          </div>
          <div class="col-12 col-lg-5 u-flex u-flex--column">
            <?php
            if ( $categories )
            {
              ?>
              <div class="u-flex tag-container">
                <?php
                foreach ( $categories as $category )
                {
                  ?>
                  <div class="tag"><?php echo $category->name; ?></div>
                  <?php
                }
                ?>
              </div>
              <?php
            }
            ?>
            <div class="project-title"><?php echo get_the_title(); ?></div>
            <div class="project-desc"><?php echo get_the_content(); ?></div>
          </div>
        </div>
        <?php
      }
      wp_reset_postdata();
      ?>
    </div>
    <div class="d-flex flex-row-reverse">
      <div class="col-12 col-lg-5 arrow-container">
        <span class="prev-btn hide"></span> <span class="prev-btn-disable "></span> <span class="next-btn"></span>
        <span class="next-btn-disable hide"></span>
      </div>
    </div>
  </section>
  <?php
  get_template_part( 'templates/partials/get-back' );
  get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
  get_template_part( 'templates/partials/footer-socials' );
  ?>
</div>
