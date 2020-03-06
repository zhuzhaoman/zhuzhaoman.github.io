(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{246:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nginx配置http域名证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置http域名证书"}},[t._v("#")]),t._v(" nginx配置HTTP域名证书")]),t._v(" "),n("h2",{attrs:{id:"_1-安装ssl模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装ssl模块"}},[t._v("#")]),t._v(" 1.安装SSL模块")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("nginx中配置https，就必须安装ssl模块，也就是："),n("code",[t._v("http_ssl_module")])])]),t._v(" "),n("li",[n("p",[t._v("新增ssl模块（原来的那些模块要保留）")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("./configure \\\n--prefix=/usr/local/nginx \\\n--pid-path=/var/run/nginx/nginx.pid \\\n--lock-path=/var/locak/nginx.lock \\\n--error-log-path=/var/log/nginx/error.log \\\n--http-log-path=/var/log/nginx/access.log \\\n--with-http_gzip_static_module \\\n--http-client-body-temp-path=/var/temp/nginx/client \\\n--http-proxy-temp-path=/var/temp/nginx/proxy \\\n--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\\n--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\\n--http-scgi-temp-path=/var/temp/nginx/scgi \\\n--with-http_ssl_module\n")])])]),n("ul",[n("li",[n("p",[t._v("编译和安装")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("make\nmake install\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"_2-配置https"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置https"}},[t._v("#")]),t._v(" 2.配置HTTPS")]),t._v(" "),n("h3",{attrs:{id:"_2-1-把ssl证书-crt-和私钥-key拷贝到-usr-local-nginx-conf目录中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-把ssl证书-crt-和私钥-key拷贝到-usr-local-nginx-conf目录中"}},[t._v("#")]),t._v(" 2.1.把ssl证书"),n("code",[t._v("*.crt")]),t._v(" 和私钥"),n("code",[t._v("*.key")]),t._v("拷贝到/usr/local/nginx/conf目录中")]),t._v(" "),n("h3",{attrs:{id:"_2-2-新增server监听443端口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-新增server监听443端口"}},[t._v("#")]),t._v(" 2.2.新增server监听443端口")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("server {\n\tlisten 443;\n\tserver_name www.zzm.com;\n\t\n\t# 开启ssl\n\tssl on;\n\t# 配置ssl证书\n\tssl_certificate 1_www.zzm.com_bundle.crt;\n\t# 配置证书秘钥\n\tssl_certificate_key 2_www.zzm.com.key;\n\t\n\t# ssl会话cache\n\tssl_session_cache shared:SSL:1m;\n\t# ssl会话超时时间\n\tssl_session_timeout 5m;\n\t\n\t# 配置加密套件，写法遵循openssl 标准\n\tssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n\tssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:RC4:!DHE;\n\tssl_prefer_server_ciphers on;\n\t\n\tlocation / {\n\t\tproxy_pass http://tomcats/;\n\t\tindex index.html index.htm;\n\t}\n}\n")])])]),n("h2",{attrs:{id:"_3-reload-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-reload-nginx"}},[t._v("#")]),t._v(" 3.reload nginx")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("./nginx -s reload\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("附")]),t._v(" "),n("p",[t._v("腾讯云Nginx配置https文档地址：https://cloud.tencent.com/document/product/400/35244")])])])}),[],!1,null,null,null);s.default=e.exports}}]);