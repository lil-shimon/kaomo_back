import express from "express";
import multer from "multer";

const uploadRouter = express.Router();

// ファイルの保存先とファイル名の設定
const storage = multer.diskStorage({
  // 保存先の設定
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  // ファイル名の設定
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// ファイルのアップロード処理
const upload = multer({ storage: storage });

// POSTリクエストの処理
uploadRouter.post('/', upload.single('image'), (req, res) => {
  // ファイルがない場合はエラーを返す
  if (!req.file) return res.status(400).json({ message: 'File is required' });

  // ファイルの処理を行う
  const imagePath = req.file.path;

  // TODO:
  // ここで機械学習の処理を行う（例：特徴量の抽出など）

  // レスポンスを返す
  res.status(200).json({ message: 'Upload successful' });
});

export default uploadRouter;