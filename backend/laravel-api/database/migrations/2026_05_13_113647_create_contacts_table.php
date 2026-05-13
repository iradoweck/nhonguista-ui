<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('client_id')->constrained('users')->onDelete('cascade');
            $table->foreignUuid('service_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignUuid('provider_id')->constrained('users')->onDelete('cascade');
            $table->enum('channel', ['whatsapp', 'phone', 'email'])->default('whatsapp');
            $table->text('message')->nullable();
            $table->timestamp('contacted_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
