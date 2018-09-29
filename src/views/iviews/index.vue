<template>
  <div style="text-align:center;">
    <div style="margin-top:10px;margin-bottom:10px;background-color:grey;">
      <i-button>Default</i-button> | 
      <i-button type="primary">Primary</i-button> | 
      <i-button type="dashed">Dashed</i-button> | 
      <i-button type="text">Text</i-button> | 
      <i-button type="info">info</i-button> | 
      <i-button type="success">success</i-button> | 
      <i-button type="warning">warning</i-button> | 
      <i-button type="error">error</i-button> | 
    </div>
    <hr>
    <div style="margin-top:10px;margin-bottom:10px;background-color:grey;">
      <i-button>Default</i-button> | 
      <i-button type="primary" ghost>Primary</i-button> | 
      <i-button type="dashed" ghost>Dashed</i-button> | 
      <i-button type="text" ghost>Text</i-button> | 
      <i-button type="info" ghost>info</i-button> | 
      <i-button type="success" ghost>success</i-button> | 
      <i-button type="warning" ghost>warning</i-button> | 
      <i-button type="error" ghost>error</i-button> | 
    </div>

    <hr>

    <div style="margin-top:10px;margin-bottom:10px;">
      <i-button type="primary" shape="circle" icon="ios-search"></i-button>
      <i-button type="primary" icon="ios-search">Search</i-button>
      <i-button type="primary" shape="circle" icon="ios-search">Search</i-button>
      <i-button type="primary" shape="circle">Circle</i-button>
      <br><br>
      <i-button shape="circle" icon="ios-search"></i-button>
      <i-button icon="ios-search">Search</i-button>
      <i-button shape="circle" icon="ios-search">Search</i-button>
      <i-button shape="circle">Circle</i-button>
    </div>

    <hr>

    <div style="margin-top:10px;margin-bottom:10px;width:100%;">
      <i-button type="success" long>SUBMIT</i-button>
      <br><br>
      <i-button type="error" long>DELETE</i-button>
    </div>

    <hr>

    <div style="margin-top:10px;margin-bottom:10px;width:100%;">
      <i-button type="primary" loading>Loading...</i-button>
      <i-button icon="ios-download-outline" type="primary">Download</i-button>
      <i-button type="primary"><Icon type="ios-arrow-back" />Backward</i-button>
      <i-button type="primary">Forward<Icon type="ios-arrow-forward" /></i-button>

    </div>

    <div>
      <Icon size="24" color="#2d8cf0" type="ios-finger-print" />
      <Icon size="24" color="#2d8cf0" type="logo-facebook" /><Icon type="logo-facebook" />
      <Icon size="24" color="#2d8cf0" type="md-flame" /><Icon type="md-flame" />
      <Icon size="24" color="#2d8cf0" type="md-football" /><Icon type="md-football" />
      <Icon size="24" color="#2d8cf0" type="logo-freebsd-devil" /><Icon type="logo-freebsd-devil" />
      <Icon size="24" color="#2d8cf0" type="ios-game-controller-b" /><Icon type="ios-game-controller-b" />
      <Icon size="24" color="#2d8cf0" type="ios-headset" /><Icon type="ios-headset" />
      <Icon size="24" color="#2d8cf0" type="md-infinite" /><Icon type="md-infinite" />
      <Icon size="24" color="#2d8cf0" type="ios-jet" /><Icon type="ios-jet" />
      <Icon size="24" color="#2d8cf0" type="ios-no-smoking" /><Icon type="ios-no-smoking" />
      <Icon size="24" color="#2d8cf0" type="ios-nuclear-outline" /><Icon type="ios-nuclear-outline" />
      <Icon size="24" color="#2d8cf0" type="ios-shirt-outline" /><Icon type="ios-shirt-outline" />
      <Icon size="24" color="#2d8cf0" type="md-thumbs-up" /><Icon type="md-thumbs-up" />
      <Icon size="24" color="#2d8cf0" type="logo-windows" /><Icon type="logo-windows" />
    </div>

    <!-- Back -->
    <to-home></to-home>
  </div>
</template>

<script>
export default {
}
</script>
