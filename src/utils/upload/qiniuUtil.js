/**
 *  七牛上传的辅助工具
 * @time 2018/09/01
 * @author lxfriday
 */
import uuid from 'node-uuid';
import qiniu from 'qiniu';
import UPLOAD from '@/configs/upload';
// const namespace = 'WaterM/';

function generateToken() {
  const accessKey = UPLOAD.ak;
  const secretKey = UPLOAD.sk;
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

  const options = {
    scope: UPLOAD.bucket,
    expires: 72000, // 20小时
    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
  };

  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken = putPolicy.uploadToken(mac);
  return uploadToken;
}

export default {
  action: UPLOAD.action,
  key(filename, prefix) {
    // filename 包含文件 ext
    return `${prefix}${uuid.v4()}_${filename}`;
  },
  generateToken,
};
