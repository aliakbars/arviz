(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("10a87294-c4aa-4fa3-93d6-e35dda7e8846");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '10a87294-c4aa-4fa3-93d6-e35dda7e8846' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"4d9dc5c6-1533-438e-926d-4d02b83969a5":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"20893"},"glyph":{"id":"20894"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20896"},"nonselection_glyph":{"id":"20895"},"view":{"id":"20898"}},"id":"20897","type":"GlyphRenderer"},{"attributes":{},"id":"20849","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"20875"},"glyph":{"id":"20876"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20878"},"nonselection_glyph":{"id":"20877"},"view":{"id":"20880"}},"id":"20879","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"20848"},"coordinates":null,"group":null,"ticker":null},"id":"20851","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20917"},"selection_policy":{"id":"20916"}},"id":"20887","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20865"}},"id":"20860","type":"LassoSelectTool"},{"attributes":{},"id":"20857","type":"PanTool"},{"attributes":{"callback":null},"id":"20863","type":"HoverTool"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20910"},"group":null,"major_label_policy":{"id":"20911"},"ticker":{"id":"20849"}},"id":"20848","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20915"},"selection_policy":{"id":"20914"}},"id":"20881","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20881"}},"id":"20886","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20883","type":"Line"},{"attributes":{"toolbar":{"id":"20924"},"toolbar_location":"above"},"id":"20925","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"20856"},{"id":"20857"},{"id":"20858"},{"id":"20859"},{"id":"20860"},{"id":"20861"},{"id":"20862"},{"id":"20863"}]},"id":"20866","type":"Toolbar"},{"attributes":{},"id":"20844","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20895","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20919"},"selection_policy":{"id":"20918"}},"id":"20893","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20864"}},"id":"20858","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"20866"}],"tools":[{"id":"20856"},{"id":"20857"},{"id":"20858"},{"id":"20859"},{"id":"20860"},{"id":"20861"},{"id":"20862"},{"id":"20863"}]},"id":"20924","type":"ProxyToolbar"},{"attributes":{},"id":"20859","type":"WheelZoomTool"},{"attributes":{"source":{"id":"20887"}},"id":"20892","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20913"},"selection_policy":{"id":"20912"}},"id":"20875","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20865","type":"PolyAnnotation"},{"attributes":{"source":{"id":"20875"}},"id":"20880","type":"CDSView"},{"attributes":{},"id":"20913","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20903","type":"Title"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20882","type":"Line"},{"attributes":{},"id":"20919","type":"Selection"},{"attributes":{},"id":"20842","type":"DataRange1d"},{"attributes":{},"id":"20840","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"20887"},"glyph":{"id":"20888"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20890"},"nonselection_glyph":{"id":"20889"},"view":{"id":"20892"}},"id":"20891","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20907"},"group":null,"major_label_policy":{"id":"20908"},"ticker":{"id":"20853"}},"id":"20852","type":"LinearAxis"},{"attributes":{"above":[{"id":"20900"}],"below":[{"id":"20848"}],"center":[{"id":"20851"},{"id":"20855"}],"height":500,"left":[{"id":"20852"}],"output_backend":"webgl","renderers":[{"id":"20879"},{"id":"20885"},{"id":"20891"},{"id":"20897"},{"id":"20899"}],"title":{"id":"20903"},"toolbar":{"id":"20866"},"toolbar_location":null,"width":500,"x_range":{"id":"20840"},"x_scale":{"id":"20844"},"y_range":{"id":"20842"},"y_scale":{"id":"20846"}},"id":"20839","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"20852"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20855","type":"Grid"},{"attributes":{},"id":"20908","type":"AllLabels"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20894","type":"Circle"},{"attributes":{},"id":"20853","type":"BasicTicker"},{"attributes":{},"id":"20907","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20899","type":"Span"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20889","type":"Line"},{"attributes":{"children":[[{"id":"20839"},0,0]]},"id":"20923","type":"GridBox"},{"attributes":{"children":[{"id":"20925"},{"id":"20923"}]},"id":"20926","type":"Column"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20890","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20864","type":"BoxAnnotation"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20897"},{"id":"20891"}]},"id":"20902","type":"LegendItem"},{"attributes":{},"id":"20918","type":"UnionRenderers"},{"attributes":{},"id":"20861","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20876","type":"Circle"},{"attributes":{},"id":"20911","type":"AllLabels"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20901"},{"id":"20902"}],"location":"center_right","orientation":"horizontal"},"id":"20900","type":"Legend"},{"attributes":{"source":{"id":"20893"}},"id":"20898","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20878","type":"Circle"},{"attributes":{},"id":"20915","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20896","type":"Circle"},{"attributes":{},"id":"20910","type":"BasicTickFormatter"},{"attributes":{},"id":"20846","type":"LinearScale"},{"attributes":{},"id":"20912","type":"UnionRenderers"},{"attributes":{},"id":"20916","type":"UnionRenderers"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20884","type":"Line"},{"attributes":{},"id":"20914","type":"UnionRenderers"},{"attributes":{},"id":"20856","type":"ResetTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20879"},{"id":"20885"}]},"id":"20901","type":"LegendItem"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20888","type":"Line"},{"attributes":{},"id":"20917","type":"Selection"},{"attributes":{},"id":"20862","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20881"},"glyph":{"id":"20882"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20884"},"nonselection_glyph":{"id":"20883"},"view":{"id":"20886"}},"id":"20885","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20877","type":"Circle"}],"root_ids":["20926"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"4d9dc5c6-1533-438e-926d-4d02b83969a5","root_ids":["20926"],"roots":{"20926":"10a87294-c4aa-4fa3-93d6-e35dda7e8846"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();