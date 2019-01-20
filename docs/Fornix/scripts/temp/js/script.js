/**
 * @Author: shumez
 * @Date:   2018-12-01 10:49:73
 * @Project: mnemosyne
 * @Filename: script.js
 * @Last modified by:   shumez
 * @Last modified time: 2018-12-01 16:03:03
 */

// 4.2.2

$(function(){

    // title
    var title = document.title;
    $('.nav-title').html(title);
    // revised
    var revised_date = $('meta[name="revised"]').attr('content');
    $('.nav-revised').html(revised_date);

    var version = $('meta[name="version"]').attr('content');
    version = "v" + version;
    $('.nav-version').html(version);

    var title_ver = title + "." + version;
    $(document).attr("title", title_ver);

    // time
    var now = new Date();
    var hr = now.getHours();
    var mi = now.getMinutes();
    hr = hr + mi/60;
    if (hr < 6 || 24 < hr ) {
        $('body').addClass('night');
    }

    var date = now.getDate();
    if (date < 10) {
        date = '0'+ date;
    }

    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var month = months[now.getMonth()];
    var year = now.getYear();
    year -= 100;
    var print_date = year + "-" + month + "-" + date;
    var printDate = year + month + date;

    $('.page-header > h1').append(' <small class="print_date"></small>');

    $('.page-header > h1').append(' <small class="version"></small>');


    var title_date = title + "_" + printDate;
    $(document).attr("title", title_date);

    $('body').addClass('night');
    $('span.night').hide();
    $('span.day').click(function(){
        $('body').toggleClass('night');
        $('span.night').toggle();
        $('span.day').toggle();
    });
    $('span.night').click(function(){
        $('body').toggleClass('night');
        $('span.night').toggle();
        $('span.day').toggle();
    });
    $('span.glyphicon-print').click(function(){

        $('#key').toggle();
        $('#app').toggle();
        $('#ref').toggle();
        $('#q .card-group:not(.print)').toggle();

        $('#q li:has(a.all)').toggle();
        $('#q li:has(a.untag)').toggle();
        $('#q li:has(a.done)').toggle();
        $('#q li:has(a.pri)').toggle();
        $('#q li:has(a.req)').toggle();
        $('#q li:has(a.qb)').toggle();
        $('#q li:has(a.110)').toggle();
        $('#q li:has(a.111)').toggle();
        $('#q li:has(a.112)').toggle();
        $('#q li:has(a.info)').toggle();

        $('.page-header > h1 > small.print_date').html(print_date);
        $('.page-header > h1 > small.version').html(version);


        $('body').toggleClass('night');
        $('span.night').toggle();
        $('span.day').toggle();

        // $('#def').toggle();
        // $('#cls').toggle();
        // $('#eti').toggle();
        // $('#epi').toggle();
        // $('#ss').toggle();
        // $('#ex').toggle();
        // $('#dx').toggle();
        // $('#rx').toggle();
        // $('#app').toggle();
        // $('#ref').toggle();

        // $('#q div.card-group').hide();
        // $('div.card-header.mis').parent().parent().show();
        // $('div.card-header.cau').parent().parent().show();
        // $('div.card-header.info').parent().parent().show();
        // $('div.card-header.110').parent().parent().show();
        // $('div.card-header.111').parent().parent().show();

        // $('.card-body').find('.ans_t').toggleClass('correct-show');
        // $('.card-body').find('.ans_f').toggleClass('correct-hide');
        // $('div.answer').find('.card-body').show();

        // $('div.card-header:not(.rev)').parent().parent().toggle();

    });

    $('.glyphicon-education').click(function(){
        $('div.answer').find('.card-body').toggle();

    });

    $('.answer').find('.card-body').hide();

    $('#q .card').click(function(){
        $(this).next().find('.card-body').slideToggle(100);

        $(this).find('.correct').toggleClass('correct-show');
        $(this).find('.ans_t').toggleClass('correct-show');
        $(this).find('.ans_f').toggleClass('correct-hide');

        $(this).find('li.star > span.opt_star').toggle();
    });
    // $('.notqb:first-child').prent().parent().css('margin-top', '50px')

    $('div.pri').find('.card-header').append('<span class="badge badge-secondary badge-vio pri"><span class="glyphicon glyphicon-repeat"></span></span>');
    $('div.req').find('.card-header').append('<span class="badge badge-secondary badge-vio req"><span class="glyphicon glyphicon-asterisk"></span></span>');
    $('div.110').find('.card-header').append('<span class="badge badge-secondary badge-tar 110">110</span>');
    $('div.111').find('.card-header').append('<span class="badge badge-secondary badge-tar 111">111</span>');
    $('div.112').find('.card-header').append('<span class="badge badge-secondary badge-tar 112">112</span>');
    $('div.notqb').find('.card-header').append('<span class="badge badge-secondary badge-dark notqb"><strike>QB</strike</span>');
    $('div.info').find('.card-header').append('<span class="badge badge-secondary badge-vio "><span class="glyphicon glyphicon-info-sign"></span></span>');
    $('div.mnemonics').find('.card-header').append('<span class="badge badge-secondary badge-vio "><span class="glyphicon glyphicon-tags"></span></span>');
    $('div.fig').find('.card-header').append('<span class="badge badge-secondary badge-vio"><span class="glyphicon glyphicon-picture"></span></span>');

    // star
    // $('li.star').parent().parent().parent().find('.card-header').append('<span class="badge badge-secondary badge-vio"><span class="glyphicon glyphicon-star"></span></span>');
    $('li.star').parent().parent().parent().parent().addClass('star');
    $('li.star').append(' <span class="glyphicon glyphicon-star opt_star"> </span>');
    $('.opt_star').hide();
    $('div.star').find('.card-header').append('<span class="badge badge-secondary badge-vio"><span class="glyphicon glyphicon-star"></span></span>');



    // $('div.mis').next().find('span.now').addClass('mis');
    // $('div.cau').next().find('span.now').addClass('cau');
    // $('div.rev').next().find('span.now').addClass('rev');
    // $('div.hit').next().find('span.now').addClass('hit');

    $('span.now.mis').parent().parent().find('div.card-header').addClass('mis');
    $('span.now.cau').parent().parent().find('div.card-header').addClass('cau');
    $('span.now.rev').parent().parent().find('div.card-header').addClass('rev');
    $('span.now.hit').parent().parent().find('div.card-header').addClass('hit');



    // $('.card .pri').find('.card-header').html('#1');

    $('li.nav-item >a.mis').click(function(){
        $('div.card-group').show();
        $('div.card-header:not(.mis)').parent().parent().slideToggle(100);
    });
    $('li.nav-item >a.cau').click(function(){
        $('div.card-group').show();
        $('div.card-header:not(.cau)').parent().parent().slideToggle(100);
    });
    $('li.nav-item >a.rev').click(function(){
        $('div.card-group').show();
        $('div.card-header:not(.rev)').parent().parent().slideToggle(100);
    });
    $('li.nav-item >a.hit').click(function(){
        $('div.card-group').show();
        $('div.card-header:not(.hit)').parent().parent().slideToggle(100);
    });
    $('li.nav-item >a.all').click(function(){
        $('div.card-group').show();
    });
    $('li.nav-item >a.untag').click(function(){
        $('div.card-group').show();
        $('div.card-header:not(.miscaurevhit)').parent().parent().slideToggle(100);
    });
    $('li.nav-item >a.done').click(function(){
        $('div.card-group').show();
        $('div.card-header.miscaurevhit').parent().parent().slideToggle(100);
    });
    $('li.nav-item >a.pri').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.pri)').slideToggle(100);
    });
    $('li.nav-item >a.req').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.req)').slideToggle(100);
    });
    $('li.nav-item >a.qb').click(function(){
        $('div.card-group').show();
        $('div.card-group.notqb').slideToggle(100);
    });
    $('li.nav-item >a.110').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.110)').slideToggle(100);
    });
    $('li.nav-item >a.111').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.111)').slideToggle(100);
    });
    $('li.nav-item >a.info').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.info)').slideToggle(100);

        $('div.card-group.info').find('.card-body .answer').slideToggle(100);


        // $('div.card-header.info').find('.correct').toggleClass('correct-show');
        // $('div.card-header.info').find('.ans_t').toggleClass('correct-show');
        // $('div.card-header.info').find('.ans_f').toggleClass('correct-hide');
    });

    $('#q ul.nav li.nav-item:has(a.111)').after('<li class="nav-item"><a class="nav-link 112"><span class="badge badge-pill q_alert_112_n"></span><br>112</a></li>');
    $('#q ul.nav').append('<li class="nav-item"><a class="nav-link mnemonics"><span class="badge badge-pill q_alert_mnemo_n"></span><br>Mnemo</a></li>');

    $('#q ul.nav').append('<li class="nav-item"><a class="nav-link fig"><span class="badge badge-pill q_alert_fig_n"></span><br>Fig</a></li>');
    $('#q ul.nav').append('<li class="nav-item"><a class="nav-link star"><span class="badge badge-pill q_alert_star_n"></span><br>Star</a></li>');

    $('li.nav-item >a.112').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.112)').slideToggle(100);
    });

    $('li.nav-item >a.mnemonics').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.mnemonics)').slideToggle(100);
    });
    $('li.nav-item >a.fig').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.fig)').slideToggle(100);
    });
    $('li.nav-item >a.star').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.star)').slideToggle(100);
    });



    


    var n_mis = $('div.mis').size();
    var n_cau = $('div.cau').size();
    var n_rev = $('div.rev').size();
    var n_hit = $('div.hit').size();
    var n_untag = $('div.miscaurevhit').size();
    var n_all;
    var n_pri = $('div.pri').size();
    var n_req = $('div.req').size();
    var n_notqb = $('div.notqb').size();
    var n_110 = $('div.110').size();
    var n_111 = $('div.111').size();
    var n_112 = $('div.112').size();
    var n_info = $('div.info').size();
    var n_mnemo = $('div.mnemonics').size();
    var n_fig = $('div.fig').size();
    var n_star = $('div.star').size();


    var n_done = n_mis + n_cau + n_rev + n_hit;
    var n_untag = n_untag;
    var n_quiz = n_done + n_untag;
    var n_qb = n_quiz - n_notqb;
    var per_mis = Math.round(1000 * n_mis / n_quiz) / 10 + "%";
    var per_cau = Math.round(1000 * n_cau / n_quiz) / 10 + "%";
    var per_rev = Math.round(1000 * n_rev / n_quiz) / 10 + "%";
    var per_hit = Math.round(1000 * n_hit / n_quiz) / 10 + "%";
    var per_untag = Math.round(1000 * n_untag / n_quiz) / 10 + "%";

    // var alert_mis = n_mis + "<br>" + per_mis;
    // var alert_cau = n_cau + "<br>" + per_cau;
    // var alert_rev = n_rev + "<br>" + per_rev;
    // var alert_hit = n_hit + "<br>" + per_hit;

    $('span.q_alert_mis_n').html(n_mis);
    $('span.q_alert_cau_n').html(n_cau);
    $('span.q_alert_rev_n').html(n_rev);
    $('span.q_alert_hit_n').html(n_hit);
    $('span.q_alert_untag_n').html(n_untag);
    $('span.q_alert_done_n').html(n_done);
    $('span.q_alert_all_n').html(n_quiz);
    $('span.q_alert_pri_n').html(n_pri);
    $('span.q_alert_req_n').html(n_req);
    $('span.q_alert_qb_n').html(n_qb);
    $('span.q_alert_110_n').html(n_110);
    $('span.q_alert_111_n').html(n_111);
    $('span.q_alert_112_n').html(n_112);
    $('span.q_alert_info_n').html(n_info);
    $('span.q_alert_mnemo_n').html(n_mnemo);
    $('span.q_alert_fig_n').html(n_fig);
    $('span.q_alert_star_n').html(n_star);


    $('span.q_alert_mis_per').html(per_mis);
    $('span.q_alert_cau_per').html(per_cau);
    $('span.q_alert_rev_per').html(per_rev);
    $('span.q_alert_hit_per').html(per_hit);

    $('code.q_alert_done').html(n_done);


    $('p.q_dx').prepend('<code>Dx</code>: ');

    $('p.q_answer_true').prepend('True: ');
    $('p.q_answer_false').prepend('False: ');

    // tack
    $('span.rtack').append('⊣');
    $('span.ltack').append('⊢');
    $('span.utack').append('⊤');
    $('span.dtack').append('⊥');

    // $('.q .card-header').prepend($(this).find('.card-header').attr('id') );

    $('#q-tab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })




    $('div.progress > .progress-mis').width(per_mis);
    $('div.progress > .progress-cau').width(per_cau);
    $('div.progress > .progress-rev').width(per_rev);
    $('div.progress > .progress-hit').width(per_hit);

    $('div.progress > div.progress-mis').html(per_mis);
    $('div.progress > div.progress-cau').html(per_cau);
    $('div.progress > div.progress-rev').html(per_rev);
    $('div.progress > div.progress-hit').html(per_hit);


    $('#q div.progress').css('height', '18px');
    $('#q div.progress-bar').css('height', '18px');


    // $('div.section').each(function(){
    // 	var id = $(this).attr('id');

    // 	$(this).find('h2').click(function(){
    //     	$('.card-group').show();
    //     	$('#q div.card-group:not(.'+ id + ')').slideToggle(100);

    // 	};

    // });

    // $('.section:not(#key, #app, #q) .page-header').after(
    // 	'<div class="progress" style="height: 3px">'
    // 	+'<div class="progress-bar progress-mis" role="progressbar" style="height: 3px;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
    // 	+'<div class="progress-bar progress-cau" role="progressbar" style="height: 3px;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
    // 	+'<div class="progress-bar progress-rev" role="progressbar" style="height: 3px;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
    // 	+'<div class="progress-bar progress-hit" role="progressbar" style="height: 3px; background-color: white" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
    // 	+'</div>'
    // );




    $('div.section').each(function(){
    	var id = $(this).attr('id');

    });


    $('a[href]').each(function(index){
    	var link = $(this).attr('href');


    	if (link == '' || link == '#key' || link == '#def' || link == '#cls' || link == '#eti' || link == '#epi' || link == '#ss' || link == '#ex' || link == '#dx' || link == '#rx' || link == '#app' || link == '#q') {

    	} else if (link == 'https://qb.medilink-study.com/#/MyPage') {

    	} else {
    		$('#ref ol').append('<li><a href="'+ link +'" target="_blank">' + link + '</a></li>');

    	}
    });


    $('img').each(function(index){
    	var link = $(this).attr('src');

    	if (link == '../../scripts/img/favicon.png') {

    	} else {
    		$('#ref ol').append('<li><a href="'+ link +'" target="_blank">' + link + '</a></li>');
    	}
    });



    $('iframe').each(function(index){
    	var link = $(this).attr('src');

    	if (link == '../../scripts/img/favicon.png') {

    	} else {
    		$('#ref ol').append('<li><a href="'+ link +'" target="_blank">' + link + '</a></li>');
    	}
    });



    $('#ref ol').hide();
    $('#ref .page-header').click(function(){
    	$('#ref ol').toggle();
    });


   

});