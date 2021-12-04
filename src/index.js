class Site {
    constructor(board) {
        this.boards = [];
    }
    
    addBoard(board) {
        if(this.boards.find((item) => item.name == board.name)){
            throw Error
        }
        this.boards.push(board);
        board.available = true;
    }

    findBoardByName(name){
        return this.boards.find((item) => item.name == name )
    }

}

class Board {
    constructor(title) {
        if(title == '' || title == null){
            throw Error
        }
        this.name = title;
        this.articles = [];
        this.available = false //사이트에 추가된 보드는 class site 섹션에서 만들어진다. 여기서 만드는 보드는 추가됮 않은 게시판?
    }
    
    publish(article){
            if(this.available == false){
            throw Error
        }
        article.id = `${this.name}-${this.name+Math.random()}`;
        article.createdDate = (new Date()).toISOString()
        this.articles.push(article)
        article.available = true
     }

     getAllArticles(){
         return this.articles
     }
}

class Article {
    constructor({subject, content, author}) {
        
        if(subject == '' || subject == null){
            throw Error
        }
        if(content == '' || content == null){
            throw Error
        }
        if(author== '' || author == null){
            throw Error
        }
        this.subject = subject
        this.content = content
        this.author = author
        this.comments = []
        
        console.log(this)
    }

    reply(comment){
        if(this.available !== true){
            throw Error
        }
        console.log(this)
        comment.createdDate = (new Date()).toISOString()
        this.comments.push(comment)
    }
    getAllComments(){
        return this.comments
    }
}


class Comment {
    constructor({content, author}) {
        if(content == '' || content == null){
            throw Error
        }
        if(author== '' || author == null){
            throw Error
        }
        this.content = content
        this.author = author
        
        console.log(this)
    }
}



module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
