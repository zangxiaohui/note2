

最近发现上传到AWS S3服务器上的文件(PDF或者图片)有个问题，在浏览器粘贴资源地址，有的文件直接在浏览器里预览，有的则是直接下载的。
用curl -I 查看了下不同文件的http响应头，显示的Content-Type 一种是application/octet-stream(有的显示application/x-download)，另一种则是Content-Type: application/pdf。

响应头里Content-Type为application/otcet-stream或application/x-download的文件，浏览器直接当作文件流直接下载下来，Content-Type为application/pdf的文件，如果浏览器设置了pdf预览，则以预览形式打开。


检查了下自己写的上传文件的代码，发现并没有显示设置content type的值，会不会是由于没有设置content type导致S3服务器分配了个默认的类型。测试了下，随意上传了个pdf，结果S3服务器上显示的http响应头里， content type显示是application/pdf，看来有可能是aws java sdk帮忙做了这件事。

一步步跟进代码,发现的确是sdk帮忙设置了content type，代码片段见com.amazonaws.services.s3.AmazonS3Client类的public PutObjectResult putObject(PutObjectRequest putObjectRequest) 方法

```
public PutObjectResult putObject(PutObjectRequest putObjectRequest) throws AmazonClientException, AmazonServiceException {
    ...
    // Only set the content type if it hasn't already been set
    if (metadata.getContentType() == null) {
        metadata.setContentType(Mimetypes.getInstance().getMimetype(file));
    }
    ...
}
```

后台接口用 curl -I 报错 HTTP/1.1 403 Forbidden
指定方法 curl -I -X GET 正常返回


浏览器根据Content-Type来做相应的行为


当浏览器在请求资源时，会通过http返回头中的content-type决定如何显示/处理将要加载的数据，如果这个类型浏览器能够支持阅览，浏览器就会直接展示该资源，比如png、jpeg、video等格式。在某些下载文件的场景中，服务端可能会返回文件流，并在返回头中带上Content-Type: application/octet-stream，告知浏览器这是一个字节流，浏览器处理字节流的默认方式就是下载。
