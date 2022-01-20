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
    
      
      
    
      const element = document.getElementById("b5f31f1a-6bae-4924-bae7-9306d33e5b8c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b5f31f1a-6bae-4924-bae7-9306d33e5b8c' but no matching script tag was found.")
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
                    
                  const docs_json = '{"cce4dcb3-4aa5-46a4-9949-a31ae4fcddd5":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"formatter":{"id":"17291"},"group":null,"major_label_policy":{"id":"17292"},"ticker":{"id":"17254"}},"id":"17253","type":"LinearAxis"},{"attributes":{},"id":"17258","type":"BasicTicker"},{"attributes":{"below":[{"id":"17253"}],"center":[{"id":"17256"},{"id":"17260"}],"height":288,"left":[{"id":"17257"}],"output_backend":"webgl","renderers":[{"id":"17282"}],"title":{"id":"17284"},"toolbar":{"id":"17271"},"toolbar_location":null,"width":432,"x_range":{"id":"17245"},"x_scale":{"id":"17249"},"y_range":{"id":"17247"},"y_scale":{"id":"17251"}},"id":"17244","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17245","type":"DataRange1d"},{"attributes":{},"id":"17291","type":"BasicTickFormatter"},{"attributes":{},"id":"17254","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"17299"},"toolbar_location":"above"},"id":"17300","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"17270"}},"id":"17265","type":"LassoSelectTool"},{"attributes":{},"id":"17267","type":"SaveTool"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17288"},"group":null,"major_label_policy":{"id":"17289"},"ticker":{"id":"17258"}},"id":"17257","type":"LinearAxis"},{"attributes":{"children":[{"id":"17300"},{"id":"17298"}]},"id":"17301","type":"Column"},{"attributes":{},"id":"17294","type":"Selection"},{"attributes":{},"id":"17288","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17269","type":"BoxAnnotation"},{"attributes":{},"id":"17249","type":"LinearScale"},{"attributes":{},"id":"17247","type":"DataRange1d"},{"attributes":{"tools":[{"id":"17261"},{"id":"17262"},{"id":"17263"},{"id":"17264"},{"id":"17265"},{"id":"17266"},{"id":"17267"},{"id":"17268"}]},"id":"17271","type":"Toolbar"},{"attributes":{},"id":"17289","type":"AllLabels"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17270","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"17268","type":"HoverTool"},{"attributes":{"source":{"id":"17281"}},"id":"17283","type":"CDSView"},{"attributes":{},"id":"17292","type":"AllLabels"},{"attributes":{},"id":"17264","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17280","type":"Scatter"},{"attributes":{"overlay":{"id":"17269"}},"id":"17263","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"17253"},"coordinates":null,"group":null,"ticker":null},"id":"17256","type":"Grid"},{"attributes":{},"id":"17261","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17281"},"glyph":{"id":"17280"},"group":null,"hover_glyph":null,"view":{"id":"17283"}},"id":"17282","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"17271"}],"tools":[{"id":"17261"},{"id":"17262"},{"id":"17263"},{"id":"17264"},{"id":"17265"},{"id":"17266"},{"id":"17267"},{"id":"17268"}]},"id":"17299","type":"ProxyToolbar"},{"attributes":{},"id":"17293","type":"UnionRenderers"},{"attributes":{},"id":"17262","type":"PanTool"},{"attributes":{},"id":"17266","type":"UndoTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17294"},"selection_policy":{"id":"17293"}},"id":"17281","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"17244"},0,0]]},"id":"17298","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17284","type":"Title"},{"attributes":{"axis":{"id":"17257"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17260","type":"Grid"},{"attributes":{},"id":"17251","type":"LinearScale"}],"root_ids":["17301"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"cce4dcb3-4aa5-46a4-9949-a31ae4fcddd5","root_ids":["17301"],"roots":{"17301":"b5f31f1a-6bae-4924-bae7-9306d33e5b8c"}}];
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