import * from "fs";
import { TextLoader } from "langchain/document_loaders/fs/text";


const loader = new TextLoader("/small.txt");
const docs = await loader.load();