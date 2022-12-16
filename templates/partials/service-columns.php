<?php
$project_categories = get_terms( [
  'taxonomy'   => 'project_category',
  'hide_empty' => false
] );

if ( ! is_wp_error( $project_categories ) && is_array( $project_categories ) )
{
  $class = $args[ 'class' ] ?? 'col-4';

  $columns = [];

  foreach ( $project_categories as $project_category )
  {
    $image       = get_field( 'image', $project_category->taxonomy . '_' . $project_category->term_id );
    $service_url = get_field( 'service_url', $project_category->taxonomy . '_' . $project_category->term_id );
    $tags        = get_field( 'tags', $project_category->taxonomy . '_' . $project_category->term_id );

    ob_start();
    ?>
    <article class="<?php echo esc_attr( $class ); ?>">
      <?php
      if ( $image )
      {
        ?>
        <img src="<?php echo esc_url( $image[ 'url' ] ); ?>" alt="<?php echo esc_attr( $image[ 'alt' ] ); ?>">
        <?php
      }
      ?>
      <h5><a href="<?php echo esc_url( $service_url ); ?>"><?php echo $project_category->name; ?></a></h5>
      <?php
      if ( is_array( $tags ) )
      {
        $tags_row = '';
        foreach ( $tags as $tag )
          $tags_row .= $tag->name . ', ';

        if ( $tags_row )
        {
          ?>
          <p><?php echo $tags_row . __( 'etc.' ); ?></p>
          <?php
        }
      }
      ?>
    </article>
    <?php
    $columns[] = ob_get_clean();
  }
  ?>
  <div class="wrapper">
    <div class="u-flex u-flex--center o-our-services__content">
      <?php
      for ( $i = 0; $i <= 2; $i ++ )
      {
        if ( isset( $columns[ $i ] ) )
          echo $columns[ $i ];
      }
      ?>
    </div>
    <div class="u-flex u-flex--center o-our-services__content content--margin">
      <?php
      for ( $i = 3; $i <= 4; $i ++ )
      {
        if ( isset( $columns[ $i ] ) )
          echo $columns[ $i ];
      }
      ?>
    </div>
  </div>
  <?php
}
