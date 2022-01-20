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
    
      
      
    
      const element = document.getElementById("f584b21d-95ab-449a-a632-a86a603a7947");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f584b21d-95ab-449a-a632-a86a603a7947' but no matching script tag was found.")
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
                    
                  const docs_json = '{"bde7b11c-595a-4224-9ae2-88aece3ef4ce":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"48023"}},"id":"48028","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48026","type":"VBar"},{"attributes":{},"id":"48082","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48031","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48036","type":"Span"},{"attributes":{},"id":"48083","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"48023"},"glyph":{"id":"48024"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48026"},"nonselection_glyph":{"id":"48025"},"view":{"id":"48028"}},"id":"48027","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48025","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48033","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48029","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48043","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48081"},"selection_policy":{"id":"48080"}},"id":"48030","type":"ColumnDataSource"},{"attributes":{},"id":"48073","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48091"},{"id":"48089"}]},"id":"48092","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"48030"},"glyph":{"id":"48031"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48033"},"nonselection_glyph":{"id":"48032"},"view":{"id":"48035"}},"id":"48034","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48038","type":"VBar"},{"attributes":{"source":{"id":"48030"}},"id":"48035","type":"CDSView"},{"attributes":{},"id":"48074","type":"AllLabels"},{"attributes":{},"id":"48061","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48032","type":"VBar"},{"attributes":{},"id":"47926","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48040","type":"VBar"},{"attributes":{},"id":"48076","type":"BasicTickFormatter"},{"attributes":{},"id":"48062","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48050","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48083"},"selection_policy":{"id":"48082"}},"id":"48037","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48037"},"glyph":{"id":"48038"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48040"},"nonselection_glyph":{"id":"48039"},"view":{"id":"48042"}},"id":"48041","type":"GlyphRenderer"},{"attributes":{},"id":"48077","type":"AllLabels"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48045","type":"VBar"},{"attributes":{"source":{"id":"48037"}},"id":"48042","type":"CDSView"},{"attributes":{},"id":"48084","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48039","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48047","type":"VBar"},{"attributes":{},"id":"48085","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48085"},"selection_policy":{"id":"48084"}},"id":"48044","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48044"},"glyph":{"id":"48045"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48047"},"nonselection_glyph":{"id":"48046"},"view":{"id":"48049"}},"id":"48048","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48044"}},"id":"48049","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48046","type":"VBar"},{"attributes":{"toolbars":[{"id":"47948"},{"id":"47982"}],"tools":[{"id":"47938"},{"id":"47939"},{"id":"47940"},{"id":"47941"},{"id":"47942"},{"id":"47943"},{"id":"47944"},{"id":"47945"},{"id":"47972"},{"id":"47973"},{"id":"47974"},{"id":"47975"},{"id":"47976"},{"id":"47977"},{"id":"47978"},{"id":"47979"}]},"id":"48090","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"48090"},"toolbar_location":"above"},"id":"48091","type":"ToolbarBox"},{"attributes":{},"id":"48063","type":"UnionRenderers"},{"attributes":{},"id":"48064","type":"Selection"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48056"},"group":null,"major_label_policy":{"id":"48057"},"ticker":{"id":"48019"}},"id":"47934","type":"LinearAxis"},{"attributes":{},"id":"48078","type":"UnionRenderers"},{"attributes":{},"id":"47928","type":"LinearScale"},{"attributes":{},"id":"48079","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48059"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48060"},"ticker":{"id":"47931"}},"id":"47930","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48021","type":"Title"},{"attributes":{},"id":"47931","type":"BasicTicker"},{"attributes":{"children":[[{"id":"47921"},0,0],[{"id":"47957"},0,1]]},"id":"48089","type":"GridBox"},{"attributes":{"axis":{"id":"47930"},"coordinates":null,"group":null,"ticker":null},"id":"47933","type":"Grid"},{"attributes":{},"id":"47924","type":"DataRange1d"},{"attributes":{},"id":"48065","type":"UnionRenderers"},{"attributes":{},"id":"48066","type":"Selection"},{"attributes":{"below":[{"id":"47964"}],"center":[{"id":"47967"},{"id":"47971"},{"id":"48029"},{"id":"48036"},{"id":"48043"},{"id":"48050"}],"height":331,"left":[{"id":"47968"}],"output_backend":"webgl","renderers":[{"id":"48027"},{"id":"48034"},{"id":"48041"},{"id":"48048"}],"title":{"id":"48053"},"toolbar":{"id":"47982"},"toolbar_location":null,"width":496,"x_range":{"id":"47922"},"x_scale":{"id":"47960"},"y_range":{"id":"47924"},"y_scale":{"id":"47962"}},"id":"47957","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"47922","type":"DataRange1d"},{"attributes":{},"id":"48080","type":"UnionRenderers"},{"attributes":{},"id":"47960","type":"LinearScale"},{"attributes":{},"id":"48081","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"48019","type":"FixedTicker"},{"attributes":{},"id":"48056","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"47930"}],"center":[{"id":"47933"},{"id":"47937"},{"id":"47997"},{"id":"48004"},{"id":"48011"},{"id":"48018"}],"height":331,"left":[{"id":"47934"}],"output_backend":"webgl","renderers":[{"id":"47995"},{"id":"48002"},{"id":"48009"},{"id":"48016"}],"title":{"id":"48021"},"toolbar":{"id":"47948"},"toolbar_location":null,"width":496,"x_range":{"id":"47922"},"x_scale":{"id":"47926"},"y_range":{"id":"47924"},"y_scale":{"id":"47928"}},"id":"47921","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48057","type":"AllLabels"},{"attributes":{},"id":"48059","type":"BasicTickFormatter"},{"attributes":{},"id":"48060","type":"AllLabels"},{"attributes":{},"id":"48067","type":"UnionRenderers"},{"attributes":{},"id":"48068","type":"Selection"},{"attributes":{},"id":"47978","type":"SaveTool"},{"attributes":{"callback":null},"id":"47979","type":"HoverTool"},{"attributes":{"axis":{"id":"47934"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47937","type":"Grid"},{"attributes":{"overlay":{"id":"47946"}},"id":"47940","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48004","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47980","type":"BoxAnnotation"},{"attributes":{},"id":"47944","type":"SaveTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47981","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47946","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"47981"}},"id":"47976","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"47945","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47994","type":"VBar"},{"attributes":{},"id":"47975","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"47964"},"coordinates":null,"group":null,"ticker":null},"id":"47967","type":"Grid"},{"attributes":{},"id":"47939","type":"PanTool"},{"attributes":{},"id":"47943","type":"UndoTool"},{"attributes":{},"id":"47941","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47992","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47999","type":"VBar"},{"attributes":{},"id":"47938","type":"ResetTool"},{"attributes":{"tools":[{"id":"47972"},{"id":"47973"},{"id":"47974"},{"id":"47975"},{"id":"47976"},{"id":"47977"},{"id":"47978"},{"id":"47979"}]},"id":"47982","type":"Toolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48015","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48068"},"selection_policy":{"id":"48067"}},"id":"48012","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"47947"}},"id":"47942","type":"LassoSelectTool"},{"attributes":{"source":{"id":"47991"}},"id":"47996","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48012"},"glyph":{"id":"48013"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48015"},"nonselection_glyph":{"id":"48014"},"view":{"id":"48017"}},"id":"48016","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"47938"},{"id":"47939"},{"id":"47940"},{"id":"47941"},{"id":"47942"},{"id":"47943"},{"id":"47944"},{"id":"47945"}]},"id":"47948","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48053","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48024","type":"VBar"},{"attributes":{"overlay":{"id":"47980"}},"id":"47974","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48062"},"selection_policy":{"id":"48061"}},"id":"47991","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"47991"},"glyph":{"id":"47992"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"47994"},"nonselection_glyph":{"id":"47993"},"view":{"id":"47996"}},"id":"47995","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48073"},"group":null,"major_label_policy":{"id":"48074"},"ticker":{"id":"48051"}},"id":"47968","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47993","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48001","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"47997","type":"Span"},{"attributes":{},"id":"47965","type":"BasicTicker"},{"attributes":{"source":{"id":"48012"}},"id":"48017","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48014","type":"VBar"},{"attributes":{},"id":"47977","type":"UndoTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48051","type":"FixedTicker"},{"attributes":{"source":{"id":"48005"}},"id":"48010","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48013","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48007","type":"VBar"},{"attributes":{},"id":"47962","type":"LinearScale"},{"attributes":{},"id":"47973","type":"PanTool"},{"attributes":{},"id":"47972","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48005"},"glyph":{"id":"48006"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48008"},"nonselection_glyph":{"id":"48007"},"view":{"id":"48010"}},"id":"48009","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48066"},"selection_policy":{"id":"48065"}},"id":"48005","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48018","type":"Span"},{"attributes":{"axis":{"id":"47968"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47971","type":"Grid"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48076"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48077"},"ticker":{"id":"47965"}},"id":"47964","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48008","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48000","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48079"},"selection_policy":{"id":"48078"}},"id":"48023","type":"ColumnDataSource"},{"attributes":{"source":{"id":"47998"}},"id":"48003","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48011","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47947","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48006","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"47998"},"glyph":{"id":"47999"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48001"},"nonselection_glyph":{"id":"48000"},"view":{"id":"48003"}},"id":"48002","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48064"},"selection_policy":{"id":"48063"}},"id":"47998","type":"ColumnDataSource"}],"root_ids":["48092"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"bde7b11c-595a-4224-9ae2-88aece3ef4ce","root_ids":["48092"],"roots":{"48092":"f584b21d-95ab-449a-a632-a86a603a7947"}}];
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