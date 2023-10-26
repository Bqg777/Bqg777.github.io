var posts=["2023/10/25/hello-world copy 2/","2023/10/25/hello-world copy 4/","2023/10/25/hello-world copy 3/","2023/10/25/hello-world copy 5/","2023/10/25/hello-world copy 6/","2023/10/25/hello-world copy 8/","2023/10/25/hello-world copy/","2023/10/25/hello-world copy 9/","2023/10/24/hello-world/","2023/10/25/hello-world copy 7/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Plasmon222","link":"https://blog.loveak.top/","avatar":"https://bu.dusays.com/2023/05/12/645e45a3a55e1.jpg","descr":"生活明朗，万物可爱","siteshot":"https://bu.dusays.com/2023/07/26/64c07513293ef.jpg"},{"name":"未知之旅","link":"https://blog.xenosp.cn/","avatar":"https://cravatar.cn/avatar/4EA126708E5063621186D6B5895D2684","descr":"在未知中成长，超越自我","siteshot":"https://image.xenosp.cn/i/2023/09/24/1-1695537794.jpg"},{"name":"Chenli","link":"https://chenliss.cn/","avatar":"https://bu.dusays.com/2023/08/27/64eb384e49c82.jpg","descr":"记录生活,分享生活","siteshot":"https://bu.dusays.com/2023/08/27/64ea32a1115f1.png"},{"name":"UncleCAT4","link":"https://yuanj.top","avatar":"https://yuanj.top/images/avatar.png","descr":"思绪来得快去得也快，偶尔会在这里停留","siteshot":"https://yuanj.top/images/siteshot.png"},{"name":"SerMs","link":"https://blog.serms.top/","avatar":"https://bu.dusays.com/2023/10/11/65269ea6226c8.png","descr":"迈向光明之路，必定荆棘从生。","siteshot":"https://bu.dusays.com/2023/10/11/65264d86ddebb.png"},{"name":"目的地-Destination","link":"https://blog.chrison.cn","avatar":"https://bu.dusays.com/2023/10/11/65269ea6226c8.png","descr":"迈向光明之路，必定荆棘从生。","siteshot":"https://bu.dusays.com/2023/10/11/65264d86ddebb.png"},{"name":"梦念逍遥のBLOG","link":"https://blog.mnxy.eu.org/","avatar":"https://cdn.staticaly.com/gh/MengNianxiaoyao/blogimages@main/siteicon/icon.png","descr":"无梦之境","siteshot":"https://cdn.staticaly.com/gh/MengNianxiaoyao/blogimages@main/siteicon/site.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };