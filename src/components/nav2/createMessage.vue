<template>
    <div>



      <div class="input-hader-box">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入文章标题"
          >
        </el-input>
        <el-input
          type="input"
          autosize
          placeholder="作者"
         >
        </el-input>
      </div>
      <div class="edit-box">
        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :config="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"
                      @change="onchansge($event)"
        >
        </quill-editor>
      </div>
      <div class="link-class">
         <p>原文链接</p>
        <el-input
          type="input"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="原文链接可选填"
          >
        </el-input>
      </div>

      <div class="other-div">
          <p class="send-dec">发布样式编辑</p>

          <span>封面 <em>大图片建议尺寸：900像素 * 500像素</em></span>
        <p>
          <a class="local-btn">本地上传<input type="file"></a>
          <a class="choice-btn">从图片库选择</a>
        </p>

        <div class="appmsg_edit_item">
            <p class="dec">摘要  <em>选填，如果不填写会默认抓取正文前54个字 </em></p>
          <span>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
               >
              </el-input>

          </span>
        </div>

      </div>

      <div class="save-btn">
        <el-button v-on:click="onchansge" type="primary" style="width: 100px">保存</el-button>
      </div>

    </div>
</template>
<style>
  .appmsg_edit_item{margin-top: 30px;}
  .other-div .local-btn{position: relative}
  .other-div .local-btn input{opacity: 0;width: 100%;display: inline-block;position:absolute;
    top:0;left: 0;height: 100%; }
  .appmsg_edit_item textarea{resize: none;}
  .other-div a{font-size: 13px;background: #fff;display: inline-block;text-align: center;color: #222;height:32px;line-height: 32px;cursor: pointer;border: 1px solid #E7E7EB;border-radius: 4px;width: 133px }
  .other-div a:hover{background-color: #e7e7eb;}
  .other-div .choice-btn{margin-left: 20px}

  .link-class{padding: 0px 90px;margin-top:40px}
  .other-div{padding: 0px 90px 15px;}
  .other-div .send-dec{margin: 0px;padding: 30px 0px}
  .other-div .appmsg_edit_item .dec{}
  .other-div em{font-style: normal;color: #8d8d8d}
  .input-hader-box{padding: 0px 20px;}
  .input-hader-box .el-input__inner{margin-bottom:20px !important;outline: none !important;border: none;color: #8d8d8d;}
  .input-hader-box .el-textarea{margin-top: 20px !important;color: #8d8d8d;}
  .input-hader-box .el-textarea textarea{font-size: 34px;margin-top: 20px !important;resize: none !important;outline: none !important;border: none;overflow: hidden}
  .ql-editor{height: 400px !important;}
  .edit-box{margin: 0px 20px}
  .ql-editor{overflow: hidden !important;}
  .save-btn{float: right;margin-top: 20px;margin-bottom: 50px;padding: 0px 90px}
</style>
<script>

  import { quillEditor } from 'vue-quill-editor'
  export default{
    data () {
      return {
        content: '<p style="font-size: 15px">请输入内容</p>',
        editorOption: {},
        defaultModules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'direction': 'rtl' }],                         // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],                                         // remove formatting button
            ['link', 'image', 'video']                         // link and image, video
          ]
        }

      }
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange ({ editor, html, text }) {
        this.content = html
      },
      onchansge () {
        console.log(this.content)
      }

    },
    // if you need to get the current editor object, you can find the editor object like this, the $ref object is a ref attribute corresponding to the dom redefined
    // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    },
    mounted () {
      // you can use current editor object to do something(editor methods)
      console.log('this is my editor', this.editor)
      // this.editor to do something...
    },
    components: {
      quillEditor
    }
  }
</script>
