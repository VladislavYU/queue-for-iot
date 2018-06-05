<?php
	$queue = msg_get_queue(555);
	msg_send($queue, 1, '_1_2_3_4_5');
?>
