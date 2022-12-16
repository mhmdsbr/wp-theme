<div class="main-container container-fluid g-0">
  <div class="u-home__bg--secondary">
    <div id="particles-js-10"></div>
  </div>

  <?php get_template_part( 'templates/partials/header-menu' ); ?>

  <div class="u-flex u-flex--column o-title">
    <h1 class="e-default-title"><?php the_title(); ?></h1>
  </div>

  <section class="c-job-position u-flex u-flex--column">
    <div class="u-flex u-flex--center c-button-module-2">
      <button onClick="javascript:window.location.href='<?php echo esc_url( add_query_arg( [ 'send' => 'resume' ], get_the_permalink() ) ); ?>'">
        <em class="button-circle"></em> <span aria-label="hidden"><?php _e( 'Apply for this Job', 'bugloos' ); ?></span>
      </button>
    </div>
    <div class="job-position__desc">
      <?php
      $about_company = get_field( 'job_about_company', 'option' );
      if ( $about_company )
      {
        ?>
        <h5><?php _e( 'About the Company', 'bugloos' ); ?></h5><p>
        <?php echo $about_company; ?>
      </p>
        <?php
      }
      ?>
      <h5><?php _e( 'Job description', 'bugloos' ); ?>:</h5>
      <?php
      the_content();

      $requirements = get_field( 'requirements' );
      if ( $requirements )
      {
        ?>
        <h5><?php _e( 'Requirements', 'bugloos' ); ?>:</h5>
        <ul>
          <?php
          foreach ( $requirements as $requirement )
          {
            ?>
            <li><?php echo $requirement[ 'title' ]; ?></li>
            <?php
          }
          ?>
        </ul>
        <?php
      }

      $means_items = get_field( 'job_means_items', 'option' );
      if ( $means_items )
      {
        ?>
        <h5><?php _e( 'Working with Bugloos means', 'bugloos' ); ?>:</h5>
        <ul>
          <?php
          foreach ( $means_items as $means_item )
          {
            ?>
            <li><?php echo $means_item[ 'title' ]; ?></li>
            <?php
          }
          ?>
        </ul>
        <?php
      }
      ?>
    </div>
  </section>

  <?php get_template_part( 'templates/partials/footer-socials' ); ?>
</div>
