<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerificationStatusUpdated extends Notification
{
    use Queueable;

    public $status;
    public $notes;

    /**
     * Create a new notification instance.
     */
    public function __construct($status, $notes = null)
    {
        $this->status = $status;
        $this->notes = $notes;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'status' => $this->status,
            'message' => 'O status da sua verificação foi atualizado para: ' . $this->status,
            'notes' => $this->notes,
        ];
    }
}
