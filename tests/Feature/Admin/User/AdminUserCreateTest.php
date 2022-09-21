<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminUserCreateTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_adminusercreate()
    {
        $response = $this->get('/admin/user/create');

        $response->assertStatus(302);
    }
}