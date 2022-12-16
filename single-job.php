<?php
get_header();

if ( isset( $_GET[ 'send' ] ) && $_GET[ 'send' ] == 'resume' )
  get_template_part( 'templates/apply-job-form' );
else
  get_template_part( 'templates/single-job' );

get_footer();
