<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class reply extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $data;
    public function __construct($data)
    {
        $this->data = $data;
    }
    public function build(){
        $reply = $this->data;
        return $this->from('info@sobrokom.store')->view('mail.reply_mail',compact('reply'))->subject('Reply Message');
    }
    /**
     * Get the message envelope.
     */


    /**
     * Get the message content definition.
     */


}
