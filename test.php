<?php


 $imgfile = "/home/tamil1/tamil1.github.io/img/2807a07f.jpg";

    // check that cache file exists 
    if(file_exists($imgfile)) 
	{
   

    // if so, return url of file and stop processing
    return "img/".hash('crc32', $url).".jpg";

        
	}
?>