<template>
  <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="container vh-100 shadow">
                    <div class="row">
                        <div class="col-12">
                            <!-- nav -->
                            <Navbar/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 border-end border-3">
                            <div class="chat-section">
                                <div class="chat border-bottom">
                                    <div class="chat-body">
                                        <div class="chat-img">
                                            <img src="" alt="">
                                        </div>
                                        <div class="chat-text-section">
                                            <div class="chat-name">
                                                <span>Hnin Htet Aung</span>
                                            </div>
                                            <div class="chat-paragraph">
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat border-bottom">
                                    <div class="chat-body">
                                        <div class="chat-img">
                                            <img src="" alt="">
                                        </div>
                                        <div class="chat-text-section">
                                            <div class="chat-name">
                                                <span>Hnin Htet Aung</span>
                                            </div>
                                            <div class="chat-paragraph">
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="chat-room-section">
                                <textarea placeholder="Type Here!" class="shadow form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: { Navbar },

}
</script>

<style>
.navbar{
    background-color: #0e153a;
}
.navbar-brand{
    color: aliceblue !important;
}
.chat-body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.chat-img{
    display: contents;
}
.chat-img img{
    width: 10%;
    height: 10%;
    border-radius: 50%;
}
.chat-text-section{
    margin-left: 10px;
}
.chat-name span{
    font-size: 25px;
    font-weight: 500;
    color: #0e153a;
}
.chat-room-section textarea{
    width: 850px;
    height: 20px;
    margin-bottom: 20px;
    border: none;
    padding: 5px;
    position: fixed;
    bottom: 0;
}
@media screen and (max-width:420px) {
    .chat-section{
        display: none;
    }
}
</style>