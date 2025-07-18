require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 电子名片数据 - 使用您提供的完整JSON
const flexMessage = {
  "type": "bubble",
  "hero": {
    "type": "video",
    "url": "https://voom-obs.line-scdn.net/r/myhome/hex/cj03aDZidnFjNmNiMTJzJnM9anA3JnQ9ZCZ1PTFoamphdWloczQ0ZzAmaT0w/mp4",
    "previewUrl": "https://voom-obs.line-scdn.net/r/myhome/hex/cj03dHRmM3Q2YzZtaTZpJnM9anA3JnQ9ZCZ1PTFoamo5Y3ZuNDRuMDAmaT0w/L1080x1920",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "1280:720",
      "aspectMode": "cover",
      "url": "https://voom-obs.line-scdn.net/r/myhome/hex/cj03dHRmM3Q2YzZtaTZpJnM9anA3JnQ9ZCZ1PTFoamo5Y3ZuNDRuMDAmaT0w/L1080x1920"
    },
    "aspectRatio": "1280:720",
    "action": {
      "type": "uri",
      "label": "神利商城",
      "uri": "https://joaily.com"
    }
  },
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://i.imgur.com/aEceA4j.png",
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "tel:0916978486"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/ysxEm4y.png",
        "size": "xxs",
        "align": "center",
        "gravity": "center",
        "margin": "none",
        "action": {
          "type": "uri",
          "label": "Line",
          "uri": "https://line.me/ti/p/XOX6dKMjpP"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/mcxrS5s.png",
        "margin": "none",
        "size": "xxs",
        "align": "center",
        "gravity": "center",
        "action": {
          "type": "uri",
          "label": "Facebook",
          "uri": "https://www.facebook.com/groups/FANCYBOOK"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/9EoQlR2.png",
        "size": "xxs",
        "align": "center",
        "gravity": "center",
        "action": {
          "type": "uri",
          "label": "TikTok",
          "uri": "https://www.tiktok.com/@joaily"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/yvQxe83.png",
        "size": "xxs",
        "align": "center",
        "action": {
          "type": "uri",
          "label": "E-mail",
          "uri": "mailto:joailyboss@gmail.com"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/ljZJenG.png",
        "size": "xxs",
        "action": {
          "type": "uri",
          "label": "youtube",
          "uri": "https://www.youtube.com/@Joaily/videos"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/FFVdeA6.png",
        "size": "xxs",
        "align": "center",
        "action": {
          "type": "uri",
          "label": "map",
          "uri": "https://www.google.com/maps/place/100%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E7%BE%85%E6%96%AF%E7%A6%8F%E8%B7%AF%E4%B8%89%E6%AE%B5281%E8%99%9F6%E6%A8%93/@25.0179748,121.5287351,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a98bff5e88f9:0xa8e1ffabe855f918!8m2!3d25.01797!4d121.53131!16s%2Fg%2F11n0fqlm5q?authuser=0"
        }
      },
      {
        "type": "image",
        "url": "https://i.imgur.com/LpTsI41.png",
        "size": "xxs",
        "action": {
          "type": "uri",
          "label": "share",
          "uri": "https://lihi3.cc/16B8R"
        }
      }
    ],
    "paddingAll": "0px"
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "image",
        "url": "https://i.imgur.com/5Dis7CF.jpg",
        "action": {
          "type": "uri",
          "label": "神利霸流",
          "uri": "https://lin.ee/vwTZGsa"
        }
      },
      {
        "type": "text",
        "text": "掃碼拿好康、註冊賺紅利",
        "align": "center"
      },
      {
        "type": "button",
        "style": "primary",
        "color": "#00B900",
        "action": {
          "type": "uri",
          "label": "📤 收藏名片",
          "uri": "https://line.me/R/oaMessage/@981zamfj/?%E6%B6%82%E6%9D%90%E5%BE%B7%E7%9A%84%E5%90%8D%E7%89%87%20%F0%9F%93%87%0A%0A%E5%A7%93%E5%90%8D%EF%BC%9A%E6%B6%82%E6%9D%90%E5%BE%B7%0A%E9%9B%BB%E8%A9%B1%EF%BC%9A0916-978-486%0ALINE%20ID%EF%BC%9A0921296393%0AE-mail%EF%BC%9Ajoailyboss%40gmail.com%0A%E5%9C%B0%E5%9D%80%EF%BC%9A%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E7%BE%85%E6%96%AF%E7%A6%8F%E8%B7%AF281%E8%99%9F6%E6%A8%93%0A%E5%85%AC%E5%8F%B8%EF%BC%9A%E7%A5%9E%E5%88%A9%E6%99%BA%E5%AA%92%E5%95%86%E7%9B%9F%0A%E5%8F%A3%E8%AA%9E%EF%BC%9A%E4%BD%A0%E6%B6%88%E8%B2%BB%E6%88%91%E4%BB%98%E9%8C%A2%EF%BC%8C%E4%BD%A0%E8%AB%8B%E5%AE%A2%E6%88%91%E8%B2%B7%E5%96%AE%EF%BC%8C%E4%BD%A0%E5%89%B5%E6%A5%AD%E6%88%91%E6%8A%95%E8%B3%87%0A%0A%F0%9F%94%97%20%E9%BB%9E%E9%80%99%E8%A3%A1%E5%88%86%E4%BA%AB%E5%90%8D%E7%89%87%EF%BC%9Ahttps%3A%2F%2Flihi3.cc%2F16B8R"
        },
        "height": "sm"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "contents": [],
        "spacing": "sm",
        "position": "absolute"
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "會員申請",
          "uri": "https://liff.line.me/2007768335-ZoeRBl5V"
        },
        "color": "#0000E3",
        "style": "primary",
        "height": "sm",
        "margin": "xs"
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "直接註冊",
          "uri": "https://liff.line.me/2007768335-JE1kZMDV"
        },
        "style": "primary",
        "height": "sm",
        "color": "#5B00AE"
      },
      {
        "type": "text",
        "text": "技術支持：神利智媒體聯盟行銷平台",
        "color": "#0000FF",
        "align": "center",
        "size": "xxs",
        "action": {
          "type": "uri",
          "label": "推薦",
          "uri": "http://linecorp.com/",
          "altUri": {
            "desktop": "https://joaily.com/?ref=joaily"
          }
        }
      }
    ]
  }
};

// 自动发送电子名片
app.post('/send-card', async (req, res) => {
  try {
    const { userId } = req.body;
    const ownerId = process.env.OWNER_ID; // 名片主的User ID
    
    // 获取 Channel Access Token
    const tokenResponse = await axios.post(
      'https://api.line.me/oauth2/v2.1/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.CHANNEL_ID,
        client_secret: process.env.CHANNEL_SECRET,
        scope: 'https://api.line.me/v2/bot/message/push'
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    const accessToken = tokenResponse.data.access_token;
    
    // 发送给名片主
    await axios.post(
      'https://api.line.me/v2/bot/message/push',
      {
        to: ownerId,
        messages: [
          {
            type: "flex",
            altText: "新客户电子名片",
            contents: flexMessage
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    // 发送给客户
    await axios.post(
      'https://api.line.me/v2/bot/message/push',
      {
        to: userId,
        messages: [
          {
            type: "flex",
            altText: "您的电子名片",
            contents: flexMessage
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    res.json({ success: true });
  } catch (error) {
    console.error('发送失败:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      message: error.response?.data?.message || error.message
    });
  }
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.send('OK');
});

// 启动服务器
app.listen(port, () => {
  console.log(`后端服务运行在 http://localhost:${port}`);
});
