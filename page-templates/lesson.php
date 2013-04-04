<?php
/**
 * Template Name: Lesson Template
 *
 * Description: Shows prev/next links and list of sibling page links.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
				<?php if ( has_post_thumbnail() ) : ?>
					<div class="entry-page-image">
						<?php the_post_thumbnail(); ?>
					</div><!-- .entry-page-image -->
				<?php endif; ?>

				<?php get_template_part( 'content', 'lesson' ); ?>
				
				<div class="entry-content">
  				<hr>
				
  				<ul class="lesson-navigation">
            <li class="lesson-prev">
              <?php previous_link(); ?>
            </li>
            <li class="lesson-next">
              <?php next_link(); ?>
            </li>
          </ul>
  				<hr>
				
  				<h2>Course Overview</h2>
  				<p><?php parent_link(); ?></p>
				
  				<?php
            if($post->post_parent)
            $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
            else
            $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
            if ($children) { ?>
            <ol class="lesson-list">
            <?php echo $children; ?>
            </ol>
          <?php } ?>
        </div>

			<?php endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar( 'front' ); ?>
<?php get_footer(); ?>