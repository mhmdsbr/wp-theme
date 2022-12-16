<?php
ob_start();
get_template_part( 'templates/partials/service-columns' );
$columns = ob_get_clean();
if ( $columns )
{
  ?>
  <section id="scollDown" class="c-page-sections--js c-our-services">
    <div id="particles-js"></div>
    <div class="u-flex u-flex--column o-title">
      <h1 class="e-default-title"><?php echo get_field( 'our_services_title', 'option' ); ?></h1>
      <p>
        <?php echo nl2br( get_field( 'our_services_description', 'option' ) ); ?>
      </p>
    </div>
    <?php echo $columns; ?>
    <section class="sections__fixed-icons u-flex justify-content-center align-items-end no-gutters col">
      <div class="u-flex justify-content-center">
        <article class="e-icons__theme col-10">
          <label class="switch-label" for="theme-switch"></label>
        </article>
        <article id="howler-play2" class="c-icons__sound col-2">
          <div>
            <span></span> <span></span> <span></span> <span></span> <span></span>
          </div>
        </article>
      </div>
    </section>
  </section>
  <?php
}
