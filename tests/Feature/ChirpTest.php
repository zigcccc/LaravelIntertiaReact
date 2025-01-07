<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Assert;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ChirpTest extends TestCase
{
    /**
     * Authenticated user should see index page
     */
    public function test_chirps_index_returns_a_successful_response(): void {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/chirps');

        $response->assertStatus(200);
    }

    /**
     * Unauthenticated user should be redirected
     */
    public function test_chirps_index_returns_a_redirect_response_for_unauhtneticated_user(): void {
        $response = $this->get('/chirps');

        $response->assertStatus(302);
        $response->assertLocation('login');
    }

    /**
     * Chirp can be created by authenticated user
     */
    public function test_chirp_can_be_created_by_authenticated_user(): void {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->post('/chirps', [
            "message" => "test chirp"
        ]);

        $response->assertStatus(302);
        $response->assertLocation('chirps');
        $this
            ->actingAs($user)
            ->get('/chirps')
            ->assertInertia(fn (AssertableInertia $page) => $page
                ->component('Chirps/Index')
                ->has('chirps', 1, fn (AssertableInertia $chirp) => $chirp
                    ->where('message', 'test chirp')
                    ->has('user', fn (AssertableInertia $chirpUser) => $chirpUser
                        ->where('id', $user->id)
                        ->etc()
                    )
                    ->etc()
                )
            );
    }

    /**
     * Chirp cannot be created by unauthenticated user
     */
    public function test_chirp_cannot_be_created_by_unauthenticated_user(): void {
        $response = $this->post('/chirps', [
            "message" => "test chirp"
        ]);

        $response->assertStatus(302);
        $response->assertLocation('login');
    }
}
