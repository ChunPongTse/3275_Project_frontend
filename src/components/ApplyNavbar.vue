<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h4>BookBridge</h4>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <!-- Add Logout link -->
                            <li class="nav-item">
                                {{ userName }} ({{ userRole }})<router-link class="nav-link" to="/logout">Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
</template>

<script>
export default {
  name: 'ApplyNavbar',
  props: ['userName', 'userRole']
};
</script>