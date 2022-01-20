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
    
      
      
    
      const element = document.getElementById("7060da94-55b0-42e1-a648-7e367b60ddb3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7060da94-55b0-42e1-a648-7e367b60ddb3' but no matching script tag was found.")
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
                    
                  const docs_json = '{"152d666b-622b-4f1a-afcb-8644239e4e66":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"20577"},"glyph":{"id":"20576"},"group":null,"hover_glyph":null,"view":{"id":"20579"}},"id":"20578","type":"GlyphRenderer"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20584"},"group":null,"major_label_policy":{"id":"20585"},"ticker":{"id":"20554"}},"id":"20553","type":"LinearAxis"},{"attributes":{},"id":"20545","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20566","type":"PolyAnnotation"},{"attributes":{},"id":"20550","type":"BasicTicker"},{"attributes":{"axis":{"id":"20549"},"coordinates":null,"group":null,"ticker":null},"id":"20552","type":"Grid"},{"attributes":{"overlay":{"id":"20566"}},"id":"20561","type":"LassoSelectTool"},{"attributes":{},"id":"20584","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"20565"}},"id":"20559","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"20595"},"toolbar_location":"above"},"id":"20596","type":"ToolbarBox"},{"attributes":{},"id":"20558","type":"PanTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20587"},"group":null,"major_label_policy":{"id":"20588"},"ticker":{"id":"20550"}},"id":"20549","type":"LinearAxis"},{"attributes":{},"id":"20590","type":"Selection"},{"attributes":{"source":{"id":"20577"}},"id":"20579","type":"CDSView"},{"attributes":{},"id":"20541","type":"DataRange1d"},{"attributes":{},"id":"20557","type":"ResetTool"},{"attributes":{},"id":"20543","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20576","type":"Scatter"},{"attributes":{"tools":[{"id":"20557"},{"id":"20558"},{"id":"20559"},{"id":"20560"},{"id":"20561"},{"id":"20562"},{"id":"20563"},{"id":"20564"}]},"id":"20567","type":"Toolbar"},{"attributes":{"below":[{"id":"20549"}],"center":[{"id":"20552"},{"id":"20556"}],"height":288,"left":[{"id":"20553"}],"output_backend":"webgl","renderers":[{"id":"20578"}],"title":{"id":"20580"},"toolbar":{"id":"20567"},"toolbar_location":null,"width":432,"x_range":{"id":"20541"},"x_scale":{"id":"20545"},"y_range":{"id":"20543"},"y_scale":{"id":"20547"}},"id":"20540","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"20596"},{"id":"20594"}]},"id":"20597","type":"Column"},{"attributes":{},"id":"20547","type":"LinearScale"},{"attributes":{},"id":"20589","type":"UnionRenderers"},{"attributes":{},"id":"20554","type":"BasicTicker"},{"attributes":{},"id":"20588","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20580","type":"Title"},{"attributes":{"callback":null},"id":"20564","type":"HoverTool"},{"attributes":{},"id":"20563","type":"SaveTool"},{"attributes":{},"id":"20587","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20565","type":"BoxAnnotation"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20590"},"selection_policy":{"id":"20589"}},"id":"20577","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20553"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20556","type":"Grid"},{"attributes":{},"id":"20585","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"20567"}],"tools":[{"id":"20557"},{"id":"20558"},{"id":"20559"},{"id":"20560"},{"id":"20561"},{"id":"20562"},{"id":"20563"},{"id":"20564"}]},"id":"20595","type":"ProxyToolbar"},{"attributes":{},"id":"20562","type":"UndoTool"},{"attributes":{},"id":"20560","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"20540"},0,0]]},"id":"20594","type":"GridBox"}],"root_ids":["20597"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"152d666b-622b-4f1a-afcb-8644239e4e66","root_ids":["20597"],"roots":{"20597":"7060da94-55b0-42e1-a648-7e367b60ddb3"}}];
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