<script type="text/javascript">
    var ad1 = 'AD_1';
    var ad2 = 'AD_2';
    var ad3 = 'AD_3';
    var ad4 = 'AD_4';
    function showads() {
        var the_ads = Math.random();
        if(the_ads < .25) document.write(ad1);         else if(the_ads > .25 && the_ads < .5) document.write(ad2);         else if(the_ads > .5 && the_ads < .75) document.write(ad3);         else document.write(ad4);     } </script>