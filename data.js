var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5472950704279427,
        "pitch": 0.1415235394518355,
        "fov": 1.5541509291156632
      },
      "linkHotspots": [
        {
          "yaw": 1.573430668928907,
          "pitch": 0.3385557825190251,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.4568000987107927,
          "pitch": 0.5582019740769617,
          "rotation": 0.7853981633974483,
          "target": "1-connecting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-connecting",
      "name": "Connecting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.8574483416815184,
        "pitch": 0.18462472814191244,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.72777387611481,
          "pitch": 0.4297607033647921,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 2.171112205807277,
          "pitch": 0.4478981058872833,
          "rotation": 1.5707963267948966,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.5361166397579407,
        "pitch": 0.1344089897152223,
        "fov": 1.5541509291156632
      },
      "linkHotspots": [
        {
          "yaw": 1.5729608732546518,
          "pitch": 0.5152855336195667,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.3973372215129842,
          "pitch": 0.3835063136106527,
          "rotation": 4.71238898038469,
          "target": "1-connecting"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
