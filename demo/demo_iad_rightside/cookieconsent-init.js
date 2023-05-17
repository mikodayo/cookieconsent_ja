// obtain cookieconsent plugin
var cc = initCookieConsent();

// example logo
var logo = '<img src="https://fontmeme.com/permalink/220805/3b90158d204fdd325173a5c7873e7cc1.png" alt="Logo" loading="lazy" style="margin-left: -4px; margin-bottom: -5px; height: 35px">';
var cookie = '';

// run plugin with config object
cc.run({
    current_lang : 'ja',
    autoclear_cookies : true,                   // default: false
    cookie_name: 'cc_cookie_drm',             // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false

    auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'box',                      // box,cloud,bar
            position: 'bottom right',           // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'bar',                      // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies! ',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'すべてのCookieを受け入れる',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: '設定',
                    role: 'settings'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: '',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact">contact me</a>.',
                    }
                ]
            }
        },
        'ja': {
            consent_modal: {
                title: ' このWEBサイトで使用するCookie ',
                description: '当ウェブサイトは、正常な機能保持、およびゲストのウェブサイト体験を改善するためにCookieを使用しています。Cookieを受け入れるを選択してすべてのCookie設定に同意するか、設定を選択して個々の使用中のCookieの詳細をご確認ください。',
                primary_btn: {
                    text: 'Cookieを受け入れる',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Cookie設定',
                    role: 'settings'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: '',
                save_settings_btn: '保存する',
                accept_all_btn: 'すべて受け入れる',
                reject_all_btn: 'すべて拒否する',
                close_btn_label: '閉じる',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie 設定',
                        description: '当ウェブサイトの基本的な機能を確保し、エンドユーザのオンライン体験を向上させるためにCookieを使用しています。各カテゴリーについては、いつでもオプトイン/アウトを選択することができます。Cookieとその他のデータに関する詳細は <a href="#" class="cc-link">プライバシーポリシーへのリンク</a>をご覧ください。'

                    }, {
                        title: '厳密に必要なCookie',
                        description: 'これらのCookieは当ウェブサイトが正常に機能するために必要不可欠です。このCookieなしでは、ウェブサイトは正常に動作しません。',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'パフォーマンスCookie',
                        description: 'このCookieにより訪問者数と通信トラフィックソースがカウントできるようになり、弊社サイトのパフォーマンスを判断し改善する際に使用します。このCookieを受け入れなければ、利用者が弊社サイトを訪問しても弊社にはわかりません。具体的なCookieは以下になります。',
                        toggle: {
                            value: 'analytics',     // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'ターゲティングCookie',
                        description: 'これらのCookieは、ウェブサイトの使用方法、訪れたページ、クリックしたリンクについての情報を収集します。全てのデータは匿名化され、あなたを特定するためには使用されません。',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'より詳細な情報',
                        description: 'Cookieに関する弊社方針択についてのご質問などは<a class="cc-link" href="https://orestbida.com/contact">こちらから</a>ご連絡ください。',
                    }
                ]
            }
        }
    }

});
