<?php
$posts = get_posts( [
  'post_type'      => 'post',
  'posts_per_page' => 3,
  'post_status'    => 'publish'
] );

if ( $posts )
{
  ?>
  <section class="c-page-sections--js c-blog-module">
    <div id="particles-js-3"></div>
    <div class="u-flex u-flex--column o-title">
      <h1 class="e-default-title"><?php echo get_field( 'our_blog_title', 'option' ); ?></h1>
      <p><?php echo get_field( 'our_blog_description', 'option' ); ?></p>
    </div>
    <div class="u-flex u-flex--center c-button-module-2">
      <a href="<?php echo esc_url( site_url( 'blog' ) ); ?>"> <em class="button-circle"></em>
        <span aria-label="hidden"><?php _e( 'Discover More', 'bugloos' ); ?></span> </a>
    </div>
    <div class="u-flex flex-wrap u-flex--center o-blog-module__content">
      <?php
      foreach ( $posts as $post )
      {
        setup_postdata( $post );
        ?>
        <article class="col-4">
          <div class="o-blog-module__item-wrapper">
            <?php the_post_thumbnail( 'bugloos_blog_small' ); ?>
            <h5><?php echo get_the_title(); ?></h5>
            <p><?php echo bugloos_get_content(); ?></p>
            <a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php _e( 'Read More', 'bugloos' ); ?></a>
          </div>
        </article>
        <?php
      }
      ?>
    </div>
    <section class="sections__fixed-icons u-flex justify-content-center align-items-end no-gutters col">
      <div class="u-flex justify-content-center">
        <article class="e-icons__theme col-10">
          <label class="switch-label" for="theme-switch"></label>
        </article>
        <article id="howler-play5" class="c-icons__sound col-2">
          <div>
            <span></span> <span></span> <span></span> <span></span> <span></span>
          </div>
        </article>
      </div>
    </section>
  </section>
  <?php
}
wp_reset_postdata();
