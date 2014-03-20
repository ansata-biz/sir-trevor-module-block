SirTrevor.Blocks.Module = SirTrevor.Block.extend {

  type: "module"
  title: 'Module'
  icon_name: 'module'

  editorHTML:
    '<div class="st-block__inputs">
      <div class="st-block__dropzone">
        <span class="st-icon" data-icon="module">module</span>
        <p>Module url</p>
      </div>
      <div class="st-block__input-container">
        <input type="text" name="module_uri">
      </div>
    </div>'

  loadData: (data) ->
    this.$('input').val(data.module_uri) if data?.module_uri

  toData: ->
    this.setData module_uri: this.$('input').val()
}