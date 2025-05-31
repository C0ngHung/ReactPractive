// * Modules
// * Để sử dụng được thì chính file của mình đang viết mã phải được nạp vào JavaScript
// * tức là nạp vào thẻ <script></script> và thêm cái type = module
// * Import là nạp vào
// * Export là xuất ra
// * ví dụ:
import logger from './logger.js'; //* Kết hợp sử dụng destructuring đẻ lấy ra các thằng type
import { 
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';

console.log(logger); // * Bằng chính hàm bên logger
logger('Test message...', TYPE_WARN);
