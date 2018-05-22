<template>
    <div>
        计数器:<button>-</button><br>
        当前：{{this.$store.state.count}}<br>
        计数器:<button>+</button>
    </div>
</template>
<script>
export default {
    data(){
        return {msg:'1234'}
    }
}
</script>

