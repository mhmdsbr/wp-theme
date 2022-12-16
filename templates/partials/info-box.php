<?php
$info_box_items = get_field( 'info_box_items' );
if ( $info_box_items )
{
  ?>
  <section id="Gapstars">
    <div class="sub-header">
      <?php echo get_field( 'info_box_title' ); ?>
    </div>
    <div class="card-container d-flex flex-wrap u-flex--row u-flex--center justify-content-between">
      <?php
      foreach ( $info_box_items as $info_box_item )
      {
        ?>
        <div class="card px-0">
          <?php
          if ( $info_box_item[ 'image' ] )
          {
            ?>
            <img class="card-img-top" src="<?php echo esc_url( $info_box_item[ 'image' ][ 'url' ] ); ?>" alt="<?php echo esc_attr( $info_box_item[ 'image' ][ 'alt' ] ); ?>">
            <?php
          }
          ?>
          <div class="card-body">
            <div class="card-title"><?php echo $info_box_item[ 'title' ]; ?></div>
            <p class="card-text"><?php echo nl2br( $info_box_item[ 'description' ] ); ?></p>
          </div>
        </div>
        <?php
      }
      ?>
    </div>
  </section>
  <?php
}
