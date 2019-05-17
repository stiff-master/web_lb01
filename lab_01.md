### Для чего используется запрос OPTIONS? Какие коды ответов приходят при этом запросе? Какие сайты правильно обработали запрос и вернули ожидаемые данные?

> OPTIONS - используется для получения списка методов, принимаемых веб-сервером, которые хранятся в заголовке Allow в HTTP-ответе.
 
 www.google.com вернул данные, но с ошибкой Error 405 (Method Not Allowed).
 www.apple.com, www.mail.ru, www.github.com без ошибок, но Allow не вернули.

www.google.com - 405
Allow →GET, HEAD
Date →Sat, 04 May 2019 17:41:58 GMT
Content-Type →text/html; charset=UTF-8
Server →gws
Content-Length →1592
X-XSS-Protection →0
X-Frame-Options →SAMEORIGIN

------------------------------------------------------------------------------------------------------------------------------------------------

www.apple.com - 200
Server →Apache
Content-Type →text/html; charset=UTF-8
X-Frame-Options →SAMEORIGIN
Strict-Transport-Security →max-age=86400;
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
Vary →Accept-Encoding
Content-Encoding →gzip
Cache-Control →max-age=0
Expires →Sat, 04 May 2019 17:44:03 GMT
Date →Sat, 04 May 2019 17:44:03 GMT
Content-Length →8644
Connection →keep-alive

------------------------------------------------------------------------------------------------------------------------------------------------

www.mail.ru - 200
Server →nginx/1.14.1
Date →Sat, 04 May 2019 18:00:16 GMT
Content-Type →text/html; charset=utf-8
Transfer-Encoding →chunked
Connection →keep-alive
Cache-Control →no-cache,no-store,must-revalidate
Pragma →no-cache
Expires →Fri, 04 May 2018 18:00:16 GMT
Last-Modified →Sat, 04 May 2019 21:00:16 GMT
Content-Security-Policy →default-src mail.ru *.mail.ru *.imgsmail.ru *.mradx.net *.serving-sys.com *.moatads.com *.doubleverify.com *.adsafeprotected.com; script-src 'unsafe-inline' 'unsafe-eval' mail.ru *.mail.ru *.imgsmail.ru *.mradx.net *.odnoklassniki.ru ok.ru *.doubleverify.com *.dvtps.com *.doubleclick.net *.googletagservices.com *.googlesyndication.com *.googleadservices.com *.moatads.com *.adlooxtracking.com *.adsafeprotected.com *.serving-sys.com; img-src data: blob: *; style-src 'unsafe-inline' 'unsafe-eval' blob: *.mail.ru *.imgsmail.ru *.mradx.net; font-src data: blob: https: *.mail.ru *.imgsmail.ru *.mradx.net; frame-src mail.ru *.mail.ru *.mradx.net *.doubleverify.com *.doubleclick.net ok.ru *.ok.ru; child-src mail.ru *.mail.ru *.mradx.net *.doubleverify.com *.doubleclick.net ok.ru *.ok.ru; report-uri https://cspreport.mail.ru/splash;
X-Frame-Options →SAMEORIGIN
X-XSS-Protection →1; mode=block; report=https://cspreport.mail.ru/xxssprotection
X-Content-Type-Options →nosniff
Strict-Transport-Security →max-age=16070400
Content-Encoding →gzip

------------------------------------------------------------------------------------------------------------------------------------------------

www.yandex.ru - 403 Forbidden
Date →Sat, 04 May 2019 17:45:56 GMT
Content-Type →text/html; charset=utf-8
ETag →W/"5cc864fb-3077"
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked

------------------------------------------------------------------------------------------------------------------------------------------------

www.github.com - 200
Date →Sat, 04 May 2019 17:57:35 GMT
Content-Type →text/html; charset=utf-8
Transfer-Encoding →chunked
Server →GitHub.com
Status →200 OK
Vary →X-PJAX
Vary →Accept-Encoding
ETag →W/"8ad58295a7dd4502cadbea6c3674364e"
Cache-Control →max-age=0, private, must-revalidate
Set-Cookie →has_recent_activity=1; path=/; expires=Sat, 04 May 2019 18:57:35 -0000
Set-Cookie →_gh_sess=Uit5TFYydEt3TTM2S1NYTlVHbGRiVVdyekZXdXFjUGU4OHFOcVh0VjZZaXFZdlU3b0pnMlcwU3hKSkFoVGFML0hUTmtPVHhTTzBBWnVjOGdyM0E2NDZrTXVnZkhtNjMyUzN4ZFBzRUZxWFdtdTdkbDcwbktXdlRVMzArZkNLak5SQWZyL2dPQnZDNEdiUnNtOUlBRUR3ZllXMTE1ZnRkOHBneTlNWFlFOHhxKy93anp5N3cyeUhyZFRzVzY2OXdBb0VWaW82Z1JUTE8ycEd2dnFkNEJJQVhZYW5BNDFkVmpKNVRoejFuZzN6eWRzL2EycWlyTlJzOUxmbXRwMUN0RkZ5SVdseFJSelZISmJjL0NVZHJoR0E9PS0tYTlFU1YzaGI3WC81eU1NTW1jVzd1Zz09--a30dfb7af3f4eb7430a5796ed2794d9a2fce25b1; path=/; secure; HttpOnly
X-Request-Id →0033105f-2bb6-40df-90e9-b1b1d609fb5d
Strict-Transport-Security →max-age=31536000; includeSubdomains; preload
X-Frame-Options →deny
X-Content-Type-Options →nosniff
X-XSS-Protection →1; mode=block
Referrer-Policy →origin-when-cross-origin, strict-origin-when-cross-origin
Expect-CT →max-age=2592000, report-uri="https://api.github.com/_private/browser/errors"
Content-Security-Policy →default-src 'none'; base-uri 'self'; block-all-mixed-content; connect-src 'self' uploads.github.com www.githubstatus.com collector.githubapp.com api.github.com www.google-analytics.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com wss://live.github.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com; frame-ancestors 'none'; frame-src render.githubusercontent.com; img-src 'self' data: github.githubassets.com identicons.github.com collector.githubapp.com github-cloud.s3.amazonaws.com *.githubusercontent.com customer-stories-feed.github.com; manifest-src 'self'; media-src 'none'; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com
Content-Encoding →gzip
X-GitHub-Request-Id →0C0B:6F1A:FFB704:18A6E2D:5CCDD28F


### Запрос HEAD. vk.com, www.apple.com, www.msn.com. Для чего нужен запрос HEAD? Какой сайт прислал ожидаемый ответ?

>HEAD - схож с методом GET, но выводит только заголовки HTTP-ответа, который возвращает сервер. Все сайты прислали ожидаемые ответы.
 
www.vk.com  - 418 I'm a teapot (RFC 2324)
Server →Internet Information Services
Date →Sat, 04 May 2019 17:49:33 GMT
Content-Length →0
Connection →keep-alive
X-Frontend →front605106
Access-Control-Expose-Headers →X-Frontend

------------------------------------------------------------------------------------------------------------------------------------------------

www.apple.com - 200
Server →Apache
X-Frame-Options →SAMEORIGIN
X-Xss-Protection →1; mode=block
Accept-Ranges →bytes
X-Content-Type-Options →nosniff
Content-Type →text/html; charset=UTF-8
Strict-Transport-Security →max-age=86400;
Vary →Accept-Encoding
Content-Encoding →gzip
Cache-Control →max-age=271
Expires →Sat, 04 May 2019 17:54:37 GMT
Date →Sat, 04 May 2019 17:50:06 GMT
Content-Length →8644
Connection →keep-alive

------------------------------------------------------------------------------------------------------------------------------------------------

www.msn.com - 200
Cache-Control →no-cache, no-store, no-transform
Pragma →no-cache
Content-Length →16193
Content-Type →text/html; charset=utf-8
Content-Encoding →gzip
Expires →-1
Vary →User-Agent
Set-Cookie →PreferencesMsn=eyJIb21lUGFnZSI6eyJTdHJpcGVzIjpbXSwiTWVTdHJpcGVNb2R1bGVzIjpbXSwiTWFya2V0Q29uZmlndXJhdGlvbiI6eyJNYXJrZXQiOiJydS1ydSIsIlN1cHByZXNzUHJvbXB0IjpmYWxzZSwiUHJlZmVycmVkTGFuZ3VhZ2VDb2RlIjoicnUtcnUiLCJDb3VudHJ5Q29kZSI6IlJVIn19LCJFeHBpcnlUaW1lIjo2MzcyNDIxMjE0MTg5NDE3ODcsIlZlcnNpb24iOjF90; domain=msn.com; expires=Mon, 04-May-2020 18:02:21 GMT; path=/; HttpOnly
Set-Cookie →marketPref=ru-ru; domain=msn.com; expires=Mon, 04-May-2020 18:02:21 GMT; path=/; HttpOnly
Set-Cookie →_EDGE_S=F=1; path=/; httponly; domain=msn.com
Set-Cookie →_EDGE_V=1; path=/; httponly; expires=Thu, 28-May-2020 18:02:21 GMT; domain=msn.com
Set-Cookie →MUID=0BF85A527B966ACA084F57007AA36B8E; path=/; expires=Thu, 28-May-2020 18:02:21 GMT; domain=msn.com
Access-Control-Allow-Origin →*
X-AspNetMvc-Version →5.2
X-AppVersion →20190427_15649345
X-Activity-Id →c1d26766-2fe5-47e4-9ce0-f2f9f66fa8c2
X-Az →{did:b24a0ea2b3ba45a59fc1d4d299c5ebc1, rid: 7, sn: neurope-prod-hp, dt: 2019-04-25T07:42:45.4758536Z, bt: 2019-04-28T00:14:46.5275810Z}
X-UA-Compatible →IE=Edge;chrome=1
X-Content-Type-Options →nosniff
X-FRAME-OPTIONS →SAMEORIGIN
X-Powered-By →ASP.NET
Access-Control-Allow-Methods →HEAD,GET,OPTIONS
X-XSS-Protection →1
X-MSEdge-Ref →Ref A: C1D267662FE547E49CE0F2F9F66FA8C2 Ref B: AMSEDGE1023 Ref C: 2019-05-04T18:02:21Z
Date →Sat, 04 May 2019 18:02:21 GMT


### Запросы GET и POST. Отправьте по запросу на yandex.ru, google.com и apple.com. Что они вернули? Что содержится в теле ответа?

>GET используется для простого запроса содержимого ресурсов с веб-сервера. Параметры для этого метода передаются через URL.
>POST используется для отсылки данных на веб-сервер через тело HTTP-запроса.

  При GET запросе сайты вернули: yandex.ru 200 OK стартовая страница, www.google.com - 200 OK стартовая страница, www.apple.com - 200 OK стартовая страница.
  При POST запросе сайты вернули: yandex.ru ошибку 403 Forbidden, www.google.com ошибку 405 Method Not Allowed, www.apple.com вернул статус 200 - OK.

 
GET www.yandex.ru - 200
Date →Sat, 04 May 2019 18:34:01 GMT
Content-Type →text/html; charset=UTF-8
Cache-Control →no-cache,no-store,max-age=0,must-revalidate
Expires →Sat, 04 May 2019 18:34:02 GMT
Last-Modified →Sat, 04 May 2019 18:34:02 GMT
Content-Security-Policy →connect-src 'self' wss://webasr.yandex.net https://mc.webvisor.com https://mc.webvisor.org wss://push.yandex.ru wss://portal-xiva.yandex.net https://yastatic.net https://home.yastatic.net https://yandex.ru https://*.yandex.ru static.yandex.sx brotli.yastatic.net et.yastatic.net *.serving-sys.com an.yandex.ru awaps.yandex.ru storage.mds.yandex.net music.yandex.ru music-browser.music.yandex.net mc.admetrica.ru msk-cdn-exp.yastatic.net msk-cdn-etl.yastatic.net yastat.net br.yastatic.net portal-xiva.yandex.net yastatic.net home.yastatic.net yandex.ru *.yandex.ru *.yandex.net yandex.st; default-src 'self' blob: wss://portal-xiva.yandex.net yastatic.net portal-xiva.yandex.net; font-src 'self' https://yastatic.net zen.yandex.ru static.yandex.sx brotli.yastatic.net et.yastatic.net yabro1.zen-test.yandex.ru main.zdevx.yandex.ru msk-cdn-exp.yastatic.net msk-cdn-etl.yastatic.net yastat.net br.yastatic.net yastatic.net; frame-src 'self' yabrowser: data: https://www.youtube.com https://player.video.yandex.net https://ya.ru https://ok.ru https://yastatic.net https://yandex.ru https://*.yandex.ru https://downloader.yandex.net wfarm.yandex.net secure-ds.serving-sys.com yandexadexchange.net *.yandexadexchange.net music.yandex.ru music.yandex.kz yastatic.net yandex.ru *.yandex.ru awaps.yandex.net *.cdn.yandex.net; img-src 'self' data: https://yastatic.net https://home.yastatic.net https://*.yandex.ru https://*.yandex.net https://*.tns-counter.ru awaps.yandex.net *.yastatic.net gdeua.hit.gemius.pl pa.tns-ua.com mc.yandex.com mc.webvisor.com mc.webvisor.org static.yandex.sx brotli.yastatic.net et.yastatic.net *.moatads.com avatars.mds.yandex.net bs.serving-sys.com an.yandex.ru awaps.yandex.ru nissanhelioseurope.demdex.net mc.admetrica.ru msk-cdn-exp.yastatic.net msk-cdn-etl.yastatic.net yastat.net br.yastatic.net yastatic.net home.yastatic.net yandex.ru *.yandex.ru *.yandex.net *.tns-counter.ru yandex.st; media-src 'self' blob: data: *.storage.yandex.net *.yandex.net strm.yandex.ru strm.yandex.net *.strm.yandex.net *.cdn.yandex.net storage.mds.yandex.net *.storage.mds.yandex.net yastatic.net kiks.yandex.ru; object-src 'self' *.yandex.net music.yandex.ru strm.yandex.ru flashservice.adobe.com yastatic.net kiks.yandex.ru awaps.yandex.net storage.mds.yandex.net; report-uri https://csp.yandex.net/csp?from=morda.big.ru&showid=1556994841.73122.141129.1001299&h=man2-5726-f5f-man-portal-morda-29675&csp=old&date=20190504&yandexuid=4804739911556992105; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://suburban-widget.rasp.yandex.ru https://suburban-widget.rasp.yandex.net https://music.yandex.ru https://mc.yandex.fr https://mc.webvisor.com https://yandex.fr https://mc.webvisor.org https://yastatic.net https://home.yastatic.net https://mc.yandex.ru https://pass.yandex.ru zen.yandex.ru an.yandex.ru api-maps.yandex.ru static.yandex.sx webasr.yandex.net brotli.yastatic.net et.yastatic.net z.moatads.com bs.serving-sys.com secure-ds.serving-sys.com yabro1.zen-test.yandex.ru main.zdevx.yandex.ru awaps.yandex.ru storage.mds.yandex.net msk-cdn-exp.yastatic.net msk-cdn-etl.yastatic.net yastat.net br.yastatic.net yastatic.net home.yastatic.net yandex.ru www.yandex.ru mc.yandex.ru suggest.yandex.ru clck.yandex.ru awaps.yandex.net; style-src 'self' 'unsafe-inline' https://yastatic.net https://home.yastatic.net zen.yandex.ru static.yandex.sx brotli.yastatic.net et.yastatic.net yabro1.zen-test.yandex.ru main.zdevx.yandex.ru msk-cdn-exp.yastatic.net msk-cdn-etl.yastatic.net yastat.net br.yastatic.net yastatic.net home.yastatic.net;
P3P →policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
X-Frame-Options →DENY
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked

------------------------------------------------------------------------------------------------------------------------------------------------

GET www.google.com - 200
Date →Sat, 04 May 2019 18:35:04 GMT
Expires →-1
Cache-Control →private, max-age=0
Content-Type →text/html; charset=ISO-8859-1
P3P →CP="This is not a P3P policy! See g.co/p3phelp for more info."
Content-Encoding →gzip
Server →gws
Content-Length →5393
X-XSS-Protection →0
X-Frame-Options →SAMEORIGIN
Set-Cookie →1P_JAR=2019-05-04-18; expires=Mon, 03-Jun-2019 18:35:04 GMT; path=/; domain=.google.com
Set-Cookie →NID=182=ovtmLoCkVWR1cu-WGyvjTVgHcMbTuTKscARmN-hv-aZZ6aKnQhsaZWt5u7PqmDhbyT_62RtW8lveze6KqnY5Gvfv4xuxm7SWryHqKj--Cpje6HpSKdm4XNIdSPndjwGQOeKzY6b7-_-_1Wz201cCUaVaTCqA9lTG8DTZ7NAxZMo; expires=Sun, 03-Nov-2019 18:35:04 GMT; path=/; domain=.google.com; HttpOnly

------------------------------------------------------------------------------------------------------------------------------------------------

GET www.apple.com - 200
Server →Apache
Content-Type →text/html; charset=UTF-8
X-Frame-Options →SAMEORIGIN
Vary →Accept-Encoding
Strict-Transport-Security →max-age=86400;
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
Content-Encoding →gzip
Cache-Control →max-age=0
Expires →Sat, 04 May 2019 18:35:49 GMT
Date →Sat, 04 May 2019 18:35:49 GMT
Content-Length →8644
Connection →keep-alive

------------------------------------------------------------------------------------------------------------------------------------------------

POST www.yandex.ru - 403 Forbidden
Date →Sat, 04 May 2019 18:36:24 GMT
Content-Type →text/html; charset=utf-8
ETag →W/"5cc864fb-3077"
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked

------------------------------------------------------------------------------------------------------------------------------------------------

POST www.google.com - 405 Method Not Allowed

Allow →GET, HEAD
Date →Sat, 04 May 2019 18:37:03 GMT
Content-Type →text/html; charset=UTF-8
Server →gws
Content-Length →1589
X-XSS-Protection →0
X-Frame-Options →SAMEORIGIN

------------------------------------------------------------------------------------------------------------------------------------------------

POST www.apple.com - 200
Server →Apache
Content-Type →text/html; charset=UTF-8
X-Frame-Options →SAMEORIGIN
Strict-Transport-Security →max-age=86400;
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
Vary →Accept-Encoding
Content-Encoding →gzip
Cache-Control →max-age=0
Expires →Sat, 04 May 2019 18:38:07 GMT
Date →Sat, 04 May 2019 18:38:07 GMT
Content-Length →8644
Connection →keep-alive

### Ответьте на вопросы: какой код ответа присылается от api? Что содержит тело ответа? В каком формате и какой кодировке содержаться данные? Какой веб-сервер отвечает на запросы? Какая версия протокола HTTP используется?

Код ответа - 200.

Формат и кодировка
Content-Type: application/json; charset=utf-8

Сервер
Server: Internet Information Services. srv179-129-240-87.vk.com [87.240.129.179]

Версия протокола
HTTP/1.1

Список факультетов: https://api.vk.com/method/database.getFaculties?university_id=250&count=10&access_token=d07bf1c22b688cfd056865d7638954f065afac134ef0d01862341b069683d15ee64c2fc2c6d550455e2f3&v=5.95

{
    "response": {
        "count": 20,
        "items": [
            {
                "id": 1031,
                "title": "Аэрокосмический факультет"
            },
            {
                "id": 1032,
                "title": "Факультет инженерного бизнеса и менеджмента"
            },
            {
                "id": 1033,
                "title": "Факультет информатики и систем управления"
            },
            {
                "id": 1034,
                "title": "Факультет машиностроительных технологий"
            },
            {
                "id": 1035,
                "title": "Факультет оптико-электронного приборостроения"
            },
            {
                "id": 1036,
                "title": "Приборостроительный факультет"
            },
            {
                "id": 1037,
                "title": "Радиотехнический факультет"
            },
            {
                "id": 1038,
                "title": "Факультет радиоэлектроники и лазерной техники"
            },
            {
                "id": 1039,
                "title": "Факультет ракетно-космической техники"
            },
            {
                "id": 1040,
                "title": "Факультет робототехники и комплексной автоматизации"
            }
        ]
    }
}

Ава: https://api.vk.com/method/users.get?user_ids=blacksunday01&fields=photo_50&access_token=d07bf1c22b688cfd056865d7638954f065afac134ef0d01862341b069683d15ee64c2fc2c6d550455e2f3&v=5.95

{
    "response": [
        {
            "id": 541973,
            "first_name": "Юлия",
            "last_name": "Купцова",
            "is_closed": true,
            "can_access_closed": true,
            "photo_50": "https://vk.com/images/camera_50.png?ava=1"
        }
    ]
}