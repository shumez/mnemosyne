/**
 * @Author: shumez
 * @Date:   2018-12-01 10:49:73
 * @Project: mnemosyne
 * @Filename: script.js
 * @Last modified by:   shumez
 * @Last modified time: 2018-12-01 16:03:03
 */

// 4.1.40
$(function(){
// $(document).ready(function(){
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


    $('span.day').hide();
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

        // $(this).find('li.star').toggleClass('span.glyphicon-stars');
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
    $('li.star').parent().parent().parent().find('.card-header').append('<span class="badge badge-secondary badge-vio"><span class="glyphicon glyphicon-star"></span></span>');
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
    $('li.nav-item >a.112').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.112)').slideToggle(100);
    });
    $('li.nav-item >a.info').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.info)').slideToggle(100);

        $('div.card-group.info').find('.card-body .answer').slideToggle(100);


        // $('div.card-header.info').find('.correct').toggleClass('correct-show');
        // $('div.card-header.info').find('.ans_t').toggleClass('correct-show');
        // $('div.card-header.info').find('.ans_f').toggleClass('correct-hide');
    });

    $('#q ul.nav').append('<li class="nav-item"><a class="nav-link mnemonics"><span class="badge badge-pill q_alert_mnemo_n"></span><br>Mnemo</a></li>');

    $('#q ul.nav').append('<li class="nav-item"><a class="nav-link fig"><span class="badge badge-pill q_alert_fig_n"></span><br>Fig</a></li>');


    $('li.nav-item >a.mnemonics').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.mnemonics)').slideToggle(100);
    });
    $('li.nav-item >a.fig').click(function(){
        $('div.card-group').show();
        $('div.card-group:not(.fig)').slideToggle(100);
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




    $('button.a_GE').click(function(){
        $('div.card-group:not(.a_GE)').toggle();
    });
    $('button.b_Hepa').click(function(){
        $('div.card-group:not(.b_Hepa)').toggle();
    });
    $('button.c_CV').click(function(){
        $('div.card-group:not(.c_CV)').toggle();
    });
    $('button.d_Endo').click(function(){
        $('div.card-group:not(.d_Endo)').toggle();
    });
    $('button.d_Meta').click(function(){
        $('div.card-group:not(.d_Meta)').toggle();
    });
    $('button.e_Elctr').click(function(){
        $('div.card-group:not(.e_Elctr)').toggle();
    });
    $('button.e_GU').click(function(){
        $('div.card-group:not(.e_GU)').toggle();
    });
    $('button.e_Nephro').click(function(){
        $('div.card-group:not(.e_Nephro)').toggle();
    });
    $('button.f_Immune').click(function(){
        $('div.card-group:not(.f_Immune)').toggle();
    });
    $('button.g_Heme').click(function(){
        $('div.card-group:not(.g_Heme)').toggle();
    });
    $('button.h_Infxn').click(function(){
        $('div.card-group:not(.h_Infxn)').toggle();
    });
    $('button.i_Pulmo').click(function(){
        $('div.card-group:not(.i_Pulmo)').toggle();
    });
    $('button.i_Thorax').click(function(){
        $('div.card-group:not(.i_Thorax)').toggle();
    });
    $('button.j_Neuro').click(function(){
        $('div.card-group:not(.j_Neuro)').toggle();
    });
    $('button.k_Tox').click(function(){
        $('div.card-group:not(.k_Tox)').toggle();
    });
    $('button.l_ER').click(function(){
        $('div.card-group:not(.l_ER)').toggle();
    });
    $('button.m_Ans').click(function(){
        $('div.card-group:not(.m_Ans)').toggle();
    });
    $('button.n_Geri').click(function(){
        $('div.card-group:not(.n_Geri)').toggle();
    });
    $('button.o_').click(function(){
        $('div.card-group:not(.o_)').toggle();
    });
    $('button.p_OB').click(function(){
        $('div.card-group:not(.p_OB)').toggle();
    });
    $('button.q_GYN').click(function(){
        $('div.card-group:not(.q_GYN)').toggle();
    });
    $('button.r_Oph').click(function(){
        $('div.card-group:not(.r_Oph)').toggle();
    });
    $('button.s_ENT').click(function(){
        $('div.card-group:not(.s_ENT)').toggle();
    });
    $('button.t_Ortho').click(function(){
        $('div.card-group:not(.t_Ortho)').toggle();
    });
    $('button.u_Ψ').click(function(){
        $('div.card-group:not(.u_Ψ)').toggle();
    });
    $('button.v_Derm').click(function(){
        $('div.card-group:not(.v_Derm)').toggle();
    });
    $('button.w_').click(function(){
        $('div.card-group:not(.w_)').toggle();
    });
    $('button.x_Radio').click(function(){
        $('div.card-group:not(.x_Radio)').toggle();
    });
    $('button.y_Health').click(function(){
        $('div.card-group:not(.y_Health)').toggle();
    });

    var n_a_GE = 'a_GE: ' + $('div.card-group.a_GE').size();
    $('button.a_GE').html(n_a_GE);
    var n_b_Hepa = 'b_Hepa: ' + $('div.card-group.b_Hepa').size();
    $('button.b_Hepa').html(n_b_Hepa);
    var n_c_CV = 'c_CV: ' + $('div.card-group.c_CV').size();
    $('button.c_CV').html(n_c_CV);
    var n_d_Endo= 'd_Endo: ' + $('div.card-group.d_Endo').size();
    $('button.d_Endo').html(n_d_Endo);
    var n_d_Meta = 'd_Meta: ' + $('div.card-group.d_Meta').size();
    $('button.d_Meta').html(n_d_Meta);
    var n_e_Nephro = 'e_Nephro: ' + $('div.card-group.e_Nephro').size();
    $('button.e_Nephro').html(n_e_Nephro);
    var n_e_GU = 'e_GU: ' + $('div.card-group.e_GU').size();
    $('button.e_GU').html(n_e_GU);
    var n_e_Elctr = 'e_Elctr: ' + $('div.card-group.e_Elctr').size();
    $('button.e_Elctr').html(n_e_Elctr);
    var n_f_Immune = 'f_Immune: ' + $('div.card-group.f_Immune').size();
    $('button.f_Immune').html(n_f_Immune);
    var n_g_Heme = 'g_Heme: ' + $('div.card-group.g_Heme').size();
    $('button.g_Heme').html(n_g_Heme);
    var n_h_Infxn = 'h_Infxn: ' + $('div.card-group.h_Infxn').size();
    $('button.h_Infxn').html(n_h_Infxn);
    var n_i_Pulmo = 'i_Pulmo: ' + $('div.card-group.i_Pulmo').size();
    $('button.i_Pulmo').html(n_i_Pulmo);
    var n_i_Thorax = 'i_Thorax: ' + $('div.card-group.i_Thorax').size();
    $('button.i_Thorax').html(n_i_Thorax);
    var n_j_Neuro = 'j_Neuro: ' + $('div.card-group.j_Neuro').size();
    $('button.j_Neuro').html(n_j_Neuro);
    var n_k_Tox = 'k_Tox: ' + $('div.card-group.k_Tox').size();
    $('button.k_Tox').html(n_k_Tox);
    var n_l_ER = 'l_ER: ' + $('div.card-group.l_ER').size();
    $('button.l_ER').html(n_l_ER);
    var n_m_Ans = 'm_Ans: ' + $('div.card-group.m_Ans').size();
    $('button.m_Ans').html(n_m_Ans);
    var n_n_Geri = 'n_Geri: ' + $('div.card-group.n_Geri').size();
    $('button.n_Geri').html(n_n_Geri);
    var n_o_Ped = 'o_Ped: ' + $('div.card-group.o_Ped').size();
    $('button.o_Ped').html(n_o_Ped);
    var n_p_OB = 'p_OB: ' + $('div.card-group.p_OB').size();
    $('button.p_OB').html(n_p_OB);
    var n_q_GYN = 'q_GYN: ' + $('div.card-group.q_GYN').size();
    $('button.q_GYN').html(n_q_GYN);
    var n_r_Oph = 'r_Oph: ' + $('div.card-group.r_Oph').size();
    $('button.r_Oph').html(n_r_Oph);
    var n_s_ENT = 's_ENT: ' + $('div.card-group.s_ENT').size();
    $('button.s_ENT').html(n_s_ENT);
    var n_t_Ortho = 't_Ortho: ' + $('div.card-group.t_Ortho').size();
    $('button.t_Ortho').html(n_t_Ortho);
    var n_u_Ψ = 'u_Ψ: ' + $('div.card-group.u_Ψ').size();
    $('button.u_Ψ').html(n_u_Ψ);
    var n_v_Derm = 'v_Derm: ' + $('div.card-group.v_Derm').size();
    $('button.v_Derm').html(n_v_Derm);
    var n_w_ = 'w_: ' + $('div.card-group.w_').size();
    $('button.w_').html(n_w_);
    var n_x_Radio = 'x_Radio: ' + $('div.card-group.x_Radio').size();
    $('button.x_Radio').html(n_x_Radio);
    var n_y_Health = 'y_Health: ' + $('div.card-group.y_Health').size();
    $('button.y_Health').html(n_y_Health);

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


    

});