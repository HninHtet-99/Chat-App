<template>
  <div class="chat mt-3">
    <div class="single-chat sender-single-chat">
        <div class="single mx-1">
            <span class="name">Hnin Htet</span>
            <span class="message">Hello theredcfsd</span>
            <span class="time">3 mins ago</span>
        </div>
        <div class="">
            <img src="../assets/img/logos/bootstrap.png" class="img" alt="">
        </div>
    </div>
    <div class="single-chat receiver-single-chat">
        <div class="single mx-1">
            <span class="name">Hnin Htet</span>
            <span class="message">Hello theredcfsd</span>
            <span class="time">3 mins ago</span>
        </div>
        <div class="">
            <img src="../assets/img/logos/bootstrap.png" class="img" alt="">
        </div>
    </div>
    <!-- <div class="single-chat receiver-single-chat">
        <div class="">
                <img src="../assets/img/logos/illustrator.png" class="img" alt="">
        </div>
        <div class="single mx-1">
            <span class="name">Hnin Htet</span>
            <span class="message">Hello theredcfsd</span>
            <span class="time">3 mins ago</span>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.single-chat{
    display: flex;
    align-items: center;
    position: relative;
    width: 200px;
}
.sender-single-chat{
    left: 70%;
}
.receiver-single-chat{
    flex-direction: row-reverse;
}
.single{
    display: inline-flex;
    flex-direction: column;
}
.sender-single-chat .single{
    align-items: flex-end;
}
.receiver-single-chat .single{
    align-items: flex-start;
}

.name, .time{
    color: #999;
    font-size: 13px;
}
.img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.message{
    border-radius: 20px;
    padding: 5px 10px;
}
.sender-single-chat .message{
    background-color: #e2f3f5;
}
.receiver-single-chat .message{
    background-color: #f0f0f0;
}
@media screen and (max-width:420px) {
    .sender-single-chat{
        left: 45%;
    }
    
}
</style>