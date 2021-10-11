<template>
  <section id="footer">
      <div class="container">
          <div class="row">
              <div class="col-3">
                  <div class="header-view">
                      SB UI Kit Pro
                  </div>
                  <div class="subheader-view">
                      Design made easy
                  </div>
              </div>

              <div class="col-9">
                  <div class="row">
                      <div class="col-3">
                          <p class="text-header">{{titleProduct}}</p>
                          <ul class="list-unstyled">
                              <li v-for="item in footerItemProduct" :key="item.key">{{item.title}}</li>
                          </ul>
                      </div>
                      <div class="col-3">
                          <p class="text-header">{{titleTechnical}}</p>
                          <ul class="list-unstyled">
                              <li v-for="item in footerItemTechnical" :key="item.key">{{item.title}}</li>
                          </ul>
                      </div>
                      <div class="col-3">
                          <p class="text-header">{{titleIncludes}}</p>
                          <ul class="list-unstyled">
                              <li v-for="item in footerItemIncludes" :key="item.key">{{item.title}}</li>
                          </ul>
                      </div>
                      <div class="col-3">
                          <p class="text-header">{{titleLegal}}</p>
                          <ul class="list-unstyled">
                              <li v-for="item in footerItemLegal" :key="item.key">{{item.title}}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

          <hr>
      </div>
  </section>
</template>

<script>

export default {
    name:'footer',
    data: () => ({

        titleProduct:'Product',
        titleTechnical:'Technical',
        titleIncludes:'Includes',
        titleLegal:'Legal',

        footerItemProduct: [
            {id:1, title:'Landing', isProduct: true},        
            {id:2, title:'Pages', isProduct: true},          
            {id:3, title:'Sections', isProduct: true},       
            {id:4, title:'Documentation', isProduct: true},  
            {id:5, title:'Changelog', isProduct: true},  
        ],

        footerItemTechnical: [
            {id:6, title:'Documentation'},
            {id:7, title:'Changelog'},
            {id:8, title:'Theme Customizer'},
            {id:9, title:'UI Kit'},
        ],

        footerItemIncludes: [
            {id:10, title:'Utilites'},
            {id:11, title:'Components'},
            {id:12, title:'Layout'}, 
            {id:13, title:'Code Samples'}, 
            {id:14, title:'Products'},
            {id:15, title:'Affiliates'}, 
            {id:16, title:'Updates'},
        ],

        footerItemLegal: [
            {id:17, title:'Privacy Policy'},
            {id:18, title:'Terms and Conditions'},
            {id:19, title:'License'},
        ]
    }),
}
</script>

<style>
    #footer {
        position: relative;
        color: #A7AEB8;
    }

    #footer .header-view {
        font-size: 1.2rem;
        font-weight: bold;
    }

    #footer .text-header {
        font-weight: 700;
        letter-spacing: 0.125em;
        text-transform: uppercase;
        font-size: 0.75rem;
    }

    #footer li {
        margin-bottom: 0.5rem;
    }
</style>